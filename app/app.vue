<template>
  <!-- Loading Screen -->
  <Transition
    leave-active-class="loader-exit"
    leave-to-class="loader-exit-to"
  >
    <div v-if="loading" class="loader">
      <!-- Radial pulse rings -->
      <div class="loader-pulses">
        <div class="loader-pulse" style="--i:0" />
        <div class="loader-pulse" style="--i:1" />
        <div class="loader-pulse" style="--i:2" />
      </div>

      <!-- Center stack -->
      <div class="loader-center">
        <!-- Logo container -->
        <div class="loader-logo-box">
          <img src="/assets/images/logo.png" alt="" class="loader-img" />
        </div>

        <!-- Text -->
        <h1 class="loader-title">
          <span class="loader-char loader-char-white" v-for="(ch, i) in codeChars" :key="'c'+i" :style="`--d:${0.6 + i * 0.05}s`">{{ ch }}</span>
          <span class="loader-char loader-char-green" v-for="(ch, i) in morningChars" :key="'m'+i" :style="`--d:${0.6 + codeChars.length * 0.05 + i * 0.05}s`">{{ ch }}</span>
        </h1>

        <!-- Dots loader -->
        <div class="loader-dots">
          <span class="loader-dot" style="--d:0s" />
          <span class="loader-dot" style="--d:0.15s" />
          <span class="loader-dot" style="--d:0.3s" />
        </div>
      </div>
    </div>
  </Transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const loading = ref(true)
const codeChars = 'Code'.split('')
const morningChars = 'Morning'.split('')

useHead({
  title: 'CodeMorning',
  meta: [
    { name: 'description', content: 'CodeMorning is a software company that crafts premium websites and mobile applications.' },
  ],
  htmlAttrs: { lang: 'en', class: 'dark' },
})

onMounted(() => {
  const minTime = 2600
  const start = Date.now()

  const hide = () => {
    const wait = Math.max(0, minTime - (Date.now() - start))
    setTimeout(() => { loading.value = false }, wait)
  }

  if (document.readyState === 'complete') hide()
  else window.addEventListener('load', hide, { once: true })
})
</script>

<style>
/* ── Loader shell ── */
.loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #030712;
  will-change: opacity, transform;
}

/* ── Radial pulses ── */
.loader-pulses {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.loader-pulse {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  border: 1px solid rgba(34, 197, 94, 0.08);
  animation: pulse 3s ease-out infinite;
  animation-delay: calc(var(--i) * 1s);
}

@keyframes pulse {
  0% { transform: scale(0.6); opacity: 1; }
  100% { transform: scale(3.5); opacity: 0; }
}

/* ── Center ── */
.loader-center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* ── Logo box ── */
.loader-logo-box {
  position: relative;
  width: 100px;
  height: 100px;
  animation: logoIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
             logoBounce 2s ease-in-out 1.2s infinite;
  opacity: 0;
}

@keyframes logoIn {
  0% { opacity: 0; transform: scale(0) rotate(-90deg); }
  60% { opacity: 1; transform: scale(1.15) rotate(5deg); }
  80% { transform: scale(0.95) rotate(-2deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

@keyframes logoBounce {
  0%, 100% { transform: translateY(0); }
  30% { transform: translateY(-12px); }
  50% { transform: translateY(0); }
  65% { transform: translateY(-5px); }
  80% { transform: translateY(0); }
}

/* SVG spinner */
.loader-spinner {
  position: absolute;
  inset: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
}

.loader-spinner-track {
  fill: none;
  stroke: rgba(34, 197, 94, 0.08);
  stroke-width: 2;
}

.loader-spinner-fill {
  fill: none;
  stroke: url(#lg) #4ade80;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-dasharray: 352;
  stroke-dashoffset: 260;
  animation: spinDash 1.4s ease-in-out infinite;
  transform-origin: center;
}

@keyframes spinDash {
  0% { transform: rotate(0deg); stroke-dashoffset: 260; }
  50% { stroke-dashoffset: 60; }
  100% { transform: rotate(360deg); stroke-dashoffset: 260; }
}

.loader-img {
  width: 100%;
  height: 100%;
  border-radius: 22px;
  object-fit: cover;
}

@keyframes imgGlow {
  0% { text-shadow: 0 0 10px rgba(34, 197, 94, 0.12); }
  100% { text-shadow: 0 0 20px rgba(34, 197, 94, .8), 0 0 20px rgba(34, 197, 94, 0.08); }
}

/* ── Title — per-character stagger ── */
.loader-title {
  margin-top: 10px;
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  display: flex;
  animation: imgGlow 1s ease-in-out infinite alternate;
}

.loader-char {
  display: inline-block;
  opacity: 0;
  animation: charIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  animation-delay: var(--d);
}

.loader-char-white {
  color: #fff;
}

.loader-char-green {
  color: #22c55e;
}

@keyframes charIn {
  0% { opacity: 0; transform: translateY(16px) scale(0.7); filter: blur(4px); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
}

/* ── Dots ── */
.loader-dots {
  margin-top: 24px;
  display: flex;
  gap: 6px;
  animation: textFade 0.4s ease-out 1.2s forwards;
  opacity: 0;
}

@keyframes textFade {
  to { opacity: 1; }
}

.loader-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
  animation: dotBounce 1s ease-in-out infinite;
  animation-delay: var(--d);
}

@keyframes dotBounce {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
  40% { transform: scale(1.2); opacity: 1; }
}

/* ── Exit ── */
.loader-exit {
  transition: opacity 0.5s ease, transform 0.5s ease, filter 0.5s ease;
}

.loader-exit-to {
  opacity: 0;
  transform: scale(1.08);
  filter: blur(10px);
}
</style>
