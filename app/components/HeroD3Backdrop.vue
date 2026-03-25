<template>
  <div class="absolute inset-0">
    <canvas
      ref="canvasEl"
      class="w-full h-full opacity-80 dark:opacity-70"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-white/20 via-white/0 to-white/60 dark:from-gray-950/20 dark:via-gray-950/0 dark:to-gray-950/60" />
  </div>
</template>

<script setup lang="ts">
import * as d3 from 'd3'

type Node = {
  id: number
  x: number
  y: number
  vx?: number
  vy?: number
  r: number
  depth: number
}

type SimNode = d3.SimulationNodeDatum & Node
type SimLink = d3.SimulationLinkDatum<SimNode> & { strength: number }

const canvasEl = ref<HTMLCanvasElement | null>(null)

const prefersReducedMotion = computed(() => {
  if (import.meta.server)
    return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
})

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}

onMounted(() => {
  if (!canvasEl.value)
    return

  const canvas = canvasEl.value
  const ctx = canvas.getContext('2d')
  if (!ctx)
    return
  const context = ctx

  const ro = new ResizeObserver(() => resize())
  ro.observe(canvas)

  let raf = 0
  let stop = false
  let sim: d3.Simulation<SimNode, SimLink> | null = null
  let lastT = performance.now()

  const state = {
    w: 0,
    h: 0,
    dpr: 1,
    nodes: [] as SimNode[],
    links: [] as SimLink[],
    pointer: { x: 0, y: 0, active: 0 },
    colors: {
      node: 'rgba(42, 140, 255, 0.95)',
      link: 'rgba(42, 140, 255, 0.28)',
      glow: 'rgba(42, 140, 255, 0.18)',
    },
  }

  function seededRandom(seed: number) {
    // mulberry32
    return () => {
      seed |= 0
      seed = seed + 0x6D2B79F5 | 0
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
      t = t + Math.imul(t ^ (t >>> 7), 61 | t) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  function resize() {
    const rect = canvas.getBoundingClientRect()
    const w = Math.max(1, Math.round(rect.width))
    const h = Math.max(1, Math.round(rect.height))
    const dpr = clamp(window.devicePixelRatio || 1, 1, 2)

    state.w = w
    state.h = h
    state.dpr = dpr
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)

    if (prefersReducedMotion.value) {
      initSimulation({ animate: false })
      drawFrame(0)
      return
    }

    initSimulation({ animate: true })
  }

  function initSimulation(opts: { animate: boolean }) {
    const w = state.w
    const h = state.h
    const area = w * h
    const count = clamp(Math.round(area / 22000), 26, 64)
    const rand = seededRandom(1337)

    state.nodes = Array.from({ length: count }).map((_, i) => {
      const depth = rand()
      const r = 1.8 + depth * 2.6
      return {
        id: i,
        x: rand() * w,
        y: rand() * h,
        r,
        depth,
      } satisfies SimNode
    })

    const links: SimLink[] = []
    const maxDist = Math.min(w, h) * 0.28
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const a = state.nodes[i]
        const b = state.nodes[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const d = Math.hypot(dx, dy)
        if (d < maxDist && rand() < 0.14) {
          const strength = clamp(1 - d / maxDist, 0.15, 0.85)
          links.push({
            source: a,
            target: b,
            strength,
          } as SimLink)
        }
      }
    }
    state.links = links

    sim?.stop()
    sim = d3.forceSimulation<SimNode>(state.nodes)
      .alpha(1)
      .alphaDecay(opts.animate ? 0.02 : 0.12)
      .velocityDecay(0.22)
      .force('charge', d3.forceManyBody<SimNode>().strength((d: SimNode) => -18 - d.depth * 22))
      .force('center', d3.forceCenter(w / 2, h / 2))
      .force('collision', d3.forceCollide<SimNode>().radius((d: SimNode) => d.r * 2.2).strength(0.55))
      .force('link', d3.forceLink<SimNode, SimLink>(state.links)
        .distance(() => 46)
        .strength((l: SimLink) => l.strength * 0.55))

    if (!opts.animate)
      sim.tick(80)
  }

  function drawFrame(dt: number) {
    const w = state.w
    const h = state.h
    const dpr = state.dpr

    context.setTransform(dpr, 0, 0, dpr, 0, 0)
    context.clearRect(0, 0, w, h)

    // soft vignette + glow
    const g = context.createRadialGradient(w * 0.55, h * 0.35, 10, w * 0.55, h * 0.35, Math.max(w, h) * 0.7)
    g.addColorStop(0, state.colors.glow)
    g.addColorStop(1, 'rgba(42, 140, 255, 0)')
    context.fillStyle = g
    context.fillRect(0, 0, w, h)

    const pointer = state.pointer
    const px = pointer.x
    const py = pointer.y
    const pulse = 0.5 + 0.5 * Math.sin((performance.now() / 900) + dt * 0.001)

    // links
    context.lineWidth = 1
    context.globalCompositeOperation = 'lighter'
    for (const l of state.links) {
      const a = (l.source as SimNode)
      const b = (l.target as SimNode)
      if (!a || !b)
        continue
      const dx = a.x - b.x
      const dy = a.y - b.y
      const d = Math.hypot(dx, dy)
      const maxDist = Math.min(w, h) * 0.30
      const alpha = clamp(1 - d / maxDist, 0, 1) * 0.55
      if (alpha < 0.06)
        continue

      context.strokeStyle = state.colors.link.replace('0.28', String(alpha))
      context.beginPath()
      context.moveTo(a.x, a.y)
      context.lineTo(b.x, b.y)
      context.stroke()
    }

    // nodes
    for (const n of state.nodes) {
      const dx = n.x - px
      const dy = n.y - py
      const pd = Math.hypot(dx, dy)
      const hover = pointer.active ? clamp(1 - pd / 260, 0, 1) : 0

      const r = n.r * (1 + hover * 0.55 + pulse * 0.08)
      const alpha = 0.22 + n.depth * 0.55 + hover * 0.25

      // glow
      context.fillStyle = `rgba(42, 140, 255, ${clamp(alpha * 0.35, 0, 0.6)})`
      context.beginPath()
      context.arc(n.x, n.y, r * 2.6, 0, Math.PI * 2)
      context.fill()

      // core
      context.fillStyle = `rgba(42, 140, 255, ${clamp(alpha, 0.18, 0.95)})`
      context.beginPath()
      context.arc(n.x, n.y, r, 0, Math.PI * 2)
      context.fill()
    }

    context.globalCompositeOperation = 'source-over'
  }

  function step() {
    if (stop)
      return

    const now = performance.now()
    const dt = clamp(now - lastT, 8, 48)
    lastT = now

    // pointer attractor (kept gentle)
    if (state.pointer.active && sim) {
      const px = state.pointer.x
      const py = state.pointer.y
      const w = state.w
      const h = state.h
      sim.force('pointer', () => {
        for (const n of state.nodes) {
          const dx = px - n.x
          const dy = py - n.y
          const d = Math.max(90, Math.hypot(dx, dy))
          const strength = (0.11 + n.depth * 0.06) / d
          n.vx = (n.vx ?? 0) + dx * strength * 0.9
          n.vy = (n.vy ?? 0) + dy * strength * 0.9
        }
      })
    }

    sim?.tick(1)
    drawFrame(dt)
    raf = requestAnimationFrame(step)
  }

  function onMove(ev: PointerEvent) {
    const rect = canvas.getBoundingClientRect()
    const x = clamp(ev.clientX - rect.left, 0, rect.width)
    const y = clamp(ev.clientY - rect.top, 0, rect.height)
    state.pointer.x = (x / rect.width) * state.w
    state.pointer.y = (y / rect.height) * state.h
    state.pointer.active = 1
  }

  function onLeave() {
    state.pointer.active = 0
  }

  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('blur', onLeave, { passive: true })
  document.addEventListener('mouseleave', onLeave, { passive: true })

  resize()
  if (!prefersReducedMotion.value) {
    cancelAnimationFrame(raf)
    raf = requestAnimationFrame(step)
  }

  onBeforeUnmount(() => {
    stop = true
    cancelAnimationFrame(raf)
    ro.disconnect()
    sim?.stop()
    window.removeEventListener('pointermove', onMove as any)
    window.removeEventListener('blur', onLeave as any)
    document.removeEventListener('mouseleave', onLeave as any)
  })
})
</script>
