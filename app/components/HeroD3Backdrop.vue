<template>
  <div class="absolute inset-0">
    <canvas
      ref="canvasEl"
      class="w-full h-full"
      style="will-change: transform"
      aria-hidden="true"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/80 dark:from-gray-950/30 dark:via-transparent dark:to-gray-950/80" />
  </div>
</template>

<script setup lang="ts">
interface Particle {
  x: number
  y: number
  speed: number
  size: number
  depth: number
  hue: number
  life: number
  maxLife: number
  opacity: number
}

const canvasEl = ref<HTMLCanvasElement | null>(null)

function clamp(v: number, lo: number, hi: number) {
  return v < lo ? lo : v > hi ? hi : v
}

function createNoise() {
  const perm = new Uint8Array(512)
  const grad: [number, number][] = [
    [1, 1], [-1, 1], [1, -1], [-1, -1],
    [1, 0], [-1, 0], [0, 1], [0, -1],
  ]

  for (let i = 0; i < 256; i++) perm[i] = i
  let seed = 42
  for (let i = 255; i > 0; i--) {
    seed = (seed * 16807 + 0) % 2147483647
    const j = seed % (i + 1)
    const tmp = perm[i]!
    perm[i] = perm[j]!
    perm[j] = tmp
  }
  for (let i = 0; i < 256; i++) perm[i + 256] = perm[i]!

  function dot(gi: number, x: number, y: number) {
    const g = grad[gi % 8]!
    return g[0] * x + g[1] * y
  }

  function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }

  function lerp(a: number, b: number, t: number) {
    return a + t * (b - a)
  }

  return function noise2d(x: number, y: number): number {
    const xi = Math.floor(x) & 255
    const yi = Math.floor(y) & 255
    const xf = x - Math.floor(x)
    const yf = y - Math.floor(y)
    const u = fade(xf)
    const v = fade(yf)
    const aa = perm[perm[xi]! + yi]!
    const ab = perm[perm[xi]! + yi + 1]!
    const ba = perm[perm[xi + 1]! + yi]!
    const bb = perm[perm[xi + 1]! + yi + 1]!
    return lerp(
      lerp(dot(aa, xf, yf), dot(ba, xf - 1, yf), u),
      lerp(dot(ab, xf, yf - 1), dot(bb, xf - 1, yf - 1), u),
      v,
    )
  }
}

onMounted(() => {
  if (!canvasEl.value) return
  const canvas = canvasEl.value
  const c = canvas.getContext('2d')!
  if (!c) return

  const noise = createNoise()
  let raf = 0
  let stop = false
  let w = 0
  let h = 0
  let dpr = 1
  let time = 0
  let particles: Particle[] = []

  const pointer = { x: -9999, y: -9999, active: false, targetX: -9999, targetY: -9999 }
  const NOISE_SCALE = 0.0012
  const NOISE_SPEED = 0.00028
  const TRAIL_ALPHA = 0.06
  const BASE_SPEED = 0.55
  const POINTER_RADIUS = 200
  const POINTER_FORCE = 2.8

  const COLOR_RANGES: { h: number, s: number, l: number }[] = [
    { h: 210, s: 95, l: 62 },
    { h: 195, s: 90, l: 58 },
    { h: 260, s: 78, l: 64 },
    { h: 275, s: 72, l: 60 },
    { h: 240, s: 80, l: 65 },
    { h: 180, s: 85, l: 55 },
  ]

  function createParticle(rand?: () => number): Particle {
    const r = rand || Math.random
    const depth = 0.2 + r() * 0.8
    const colorDef = COLOR_RANGES[Math.floor(r() * COLOR_RANGES.length) % COLOR_RANGES.length]!
    const hue = colorDef.h + (r() - 0.5) * 20
    const maxLife = 280 + r() * 420
    return {
      x: r() * w,
      y: r() * h,
      speed: (BASE_SPEED + r() * 0.6) * depth,
      size: (1.2 + depth * 2.8) * (0.7 + r() * 0.6),
      depth,
      hue,
      life: r() * maxLife,
      maxLife,
      opacity: 0,
    }
  }

  function initParticles() {
    const count = clamp(Math.round((w * h) / 20000), 40, 140)
    let s = 1337
    const rand = () => {
      s = (s * 16807 + 0) % 2147483647
      return (s - 1) / 2147483646
    }
    particles = Array.from({ length: count }, () => createParticle(rand))
  }

  function resize() {
    const rect = canvas.getBoundingClientRect()
    w = Math.max(1, Math.round(rect.width))
    h = Math.max(1, Math.round(rect.height))
    dpr = clamp(window.devicePixelRatio || 1, 1, 2)
    canvas.width = Math.round(w * dpr)
    canvas.height = Math.round(h * dpr)
    initParticles()
  }

  function drawFrame() {
    c.setTransform(dpr, 0, 0, dpr, 0, 0)

    const isDark = document.documentElement.classList.contains('dark')
    c.fillStyle = isDark
      ? `rgba(3, 7, 18, ${TRAIL_ALPHA})`
      : `rgba(255, 255, 255, ${TRAIL_ALPHA})`
    c.fillRect(0, 0, w, h)

    if (pointer.active) {
      pointer.x += (pointer.targetX - pointer.x) * 0.08
      pointer.y += (pointer.targetY - pointer.y) * 0.08
    }

    if (pointer.active) {
      const pg = c.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, POINTER_RADIUS * 1.4)
      pg.addColorStop(0, isDark ? 'rgba(42, 140, 255, 0.06)' : 'rgba(42, 140, 255, 0.04)')
      pg.addColorStop(1, 'transparent')
      c.fillStyle = pg
      c.fillRect(0, 0, w, h)
    }

    time += NOISE_SPEED
    c.globalCompositeOperation = 'lighter'

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]!
      p.life++

      const lifeRatio = p.life / p.maxLife
      if (lifeRatio >= 1) {
        particles[i] = createParticle()
        particles[i]!.life = 0
        continue
      }
      const fadeIn = Math.min(lifeRatio * 6, 1)
      const fadeOut = Math.min((1 - lifeRatio) * 4, 1)
      p.opacity = fadeIn * fadeOut * p.depth

      const nx = p.x * NOISE_SCALE
      const ny = p.y * NOISE_SCALE
      let angle = noise(nx, ny + time) * Math.PI * 2.4
      angle += noise(nx * 2.1, ny * 2.1 + time * 1.5) * Math.PI * 0.6

      let vx = Math.cos(angle) * p.speed
      let vy = Math.sin(angle) * p.speed

      if (pointer.active) {
        const dx = pointer.x - p.x
        const dy = pointer.y - p.y
        const dist = Math.hypot(dx, dy)
        if (dist < POINTER_RADIUS && dist > 0.1) {
          const strength = (1 - dist / POINTER_RADIUS) ** 2 * POINTER_FORCE * p.depth
          vx += (-dy / dist * strength * 0.7) + (dx / dist * strength * 0.3)
          vy += (dx / dist * strength * 0.7) + (dy / dist * strength * 0.3)
          p.opacity = clamp(p.opacity + strength * 0.12, 0, 1)
        }
      }

      p.x += vx
      p.y += vy

      if (p.x < -20) p.x = w + 20
      if (p.x > w + 20) p.x = -20
      if (p.y < -20) p.y = h + 20
      if (p.y > h + 20) p.y = -20

      if (p.opacity < 0.02) continue

      const sat = 85 + p.depth * 10
      const light = isDark ? 55 + p.depth * 15 : 48 + p.depth * 12

      const glowR = p.size * (2.5 + p.depth * 1.5)
      const grd = c.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
      grd.addColorStop(0, `hsla(${p.hue}, ${sat}%, ${light}%, ${p.opacity * 0.35})`)
      grd.addColorStop(1, `hsla(${p.hue}, ${sat}%, ${light}%, 0)`)
      c.fillStyle = grd
      c.fillRect(p.x - glowR, p.y - glowR, glowR * 2, glowR * 2)

      c.beginPath()
      c.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      c.fillStyle = `hsla(${p.hue}, ${sat}%, ${light + 12}%, ${p.opacity * 0.85})`
      c.fill()
    }

    c.globalCompositeOperation = 'source-over'
  }

  function step() {
    if (stop) return
    drawFrame()
    raf = requestAnimationFrame(step)
  }

  function onMove(ev: PointerEvent) {
    const rect = canvas.getBoundingClientRect()
    pointer.targetX = clamp(ev.clientX - rect.left, 0, rect.width)
    pointer.targetY = clamp(ev.clientY - rect.top, 0, rect.height)
    if (!pointer.active) {
      pointer.x = pointer.targetX
      pointer.y = pointer.targetY
    }
    pointer.active = true
  }

  function onLeave() {
    pointer.active = false
  }

  const ro = new ResizeObserver(() => resize())
  ro.observe(canvas)

  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('blur', onLeave)
  document.addEventListener('mouseleave', onLeave)

  resize()

  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  if (reducedMotion) {
    for (let i = 0; i < 120; i++) drawFrame()
  } else {
    raf = requestAnimationFrame(step)
  }

  onBeforeUnmount(() => {
    stop = true
    cancelAnimationFrame(raf)
    ro.disconnect()
    window.removeEventListener('pointermove', onMove as EventListener)
    window.removeEventListener('blur', onLeave)
    document.removeEventListener('mouseleave', onLeave)
  })
})
</script>
