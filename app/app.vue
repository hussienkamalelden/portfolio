<template>
  <!-- Loading Screen -->
  <Transition
    leave-active-class="loader-leave-active"
    leave-to-class="loader-leave-to"
  >
    <div v-if="loading" class="loader-screen">
      <!-- Animated background grid -->
      <div class="loader-grid" />

      <!-- Floating orbs -->
      <div class="loader-orb loader-orb-1" />
      <div class="loader-orb loader-orb-2" />
      <div class="loader-orb loader-orb-3" />

      <!-- Center content -->
      <div class="loader-content">
        <!-- Logo with glow ring -->
        <div class="loader-logo-wrap">
          <div class="loader-ring" />
          <div class="loader-ring-pulse" />
          <img
            src="/assets/images/logo.png"
            alt="CodeMorning"
            class="loader-logo"
          >
        </div>

        <!-- Brand text -->
        <div class="loader-brand">
          <span class="loader-brand-code">Code</span><span class="loader-brand-morning">Morning</span>
        </div>

        <!-- Tagline -->
        <p class="loader-tagline">Building modern digital experiences</p>

        <!-- Progress bar -->
        <div class="loader-progress-track">
          <div class="loader-progress-bar" />
          <div class="loader-progress-glow" />
        </div>

        <!-- Code snippets floating -->
        <div class="loader-code loader-code-1">&lt;code/&gt;</div>
        <div class="loader-code loader-code-2">{ }</div>
        <div class="loader-code loader-code-3">./run</div>
      </div>
    </div>
  </Transition>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const loading = ref(true)

useHead({
  title: 'CodeMorning — We Build Modern Digital Experiences',
  meta: [
    { name: 'description', content: 'CodeMorning is a software company that crafts premium websites and mobile applications.' },
  ],
  htmlAttrs: { lang: 'en', class: 'dark' },
})

onMounted(() => {
  const minDisplay = 2800
  const start = Date.now()

  const dismiss = () => {
    const elapsed = Date.now() - start
    const remaining = Math.max(0, minDisplay - elapsed)
    setTimeout(() => {
      loading.value = false
    }, remaining)
  }

  if (document.readyState === 'complete') {
    dismiss()
  } else {
    window.addEventListener('load', dismiss, { once: true })
  }
})
</script>

<style>
.loader-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #030712;
  overflow: hidden;
}

/* Animated grid background */
.loader-grid {
  position: absolute;
  inset: -50%;
  background-image:
    linear-gradient(rgba(74, 222, 128, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(74, 222, 128, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  animation: gridMove 20s linear infinite;
}

@keyframes gridMove {
  0% { transform: translate(0, 0) rotate(0deg); }
  100% { transform: translate(60px, 60px) rotate(1deg); }
}

/* Floating orbs */
.loader-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  animation: orbFloat 6s ease-in-out infinite;
}

.loader-orb-1 {
  width: 400px;
  height: 400px;
  background: rgba(34, 197, 94, 0.08);
  top: -10%;
  right: -5%;
  animation-delay: 0s;
}

.loader-orb-2 {
  width: 300px;
  height: 300px;
  background: rgba(16, 185, 129, 0.06);
  bottom: -10%;
  left: -5%;
  animation-delay: -2s;
}

.loader-orb-3 {
  width: 200px;
  height: 200px;
  background: rgba(74, 222, 128, 0.05);
  top: 50%;
  left: 50%;
  animation-delay: -4s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -20px) scale(1.05); }
  66% { transform: translate(-20px, 15px) scale(0.95); }
}

/* Center content */
.loader-content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  z-index: 10;
}

/* Logo wrapper with rings */
.loader-logo-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: logoEntry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

@keyframes logoEntry {
  0% { opacity: 0; transform: scale(0.5) rotate(-10deg); }
  100% { opacity: 1; transform: scale(1) rotate(0deg); }
}

.loader-ring {
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(34, 197, 94, 0.6);
  border-right-color: rgba(74, 222, 128, 0.3);
  animation: ringRotate 1.5s linear infinite;
}

@keyframes ringRotate {
  to { transform: rotate(360deg); }
}

.loader-ring-pulse {
  position: absolute;
  inset: -16px;
  border-radius: 50%;
  border: 1px solid rgba(34, 197, 94, 0.15);
  animation: ringPulse 2s ease-in-out infinite;
}

@keyframes ringPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.08); opacity: 1; }
}

.loader-logo {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow:
    0 0 30px rgba(34, 197, 94, 0.2),
    0 0 60px rgba(34, 197, 94, 0.08);
}

/* Brand text */
.loader-brand {
  margin-top: 28px;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  animation: textFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
  opacity: 0;
}

@keyframes textFadeUp {
  0% { opacity: 0; transform: translateY(12px); }
  100% { opacity: 1; transform: translateY(0); }
}

.loader-brand-code {
  background: linear-gradient(135deg, #4ade80, #86efac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.loader-brand-morning {
  color: #d1d5db;
}

/* Tagline */
.loader-tagline {
  margin-top: 8px;
  font-size: 0.875rem;
  color: #6b7280;
  letter-spacing: 0.02em;
  animation: textFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards;
  opacity: 0;
}

/* Progress bar */
.loader-progress-track {
  position: relative;
  margin-top: 32px;
  width: 200px;
  height: 3px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 99px;
  overflow: hidden;
  animation: textFadeUp 0.5s ease-out 0.7s forwards;
  opacity: 0;
}

.loader-progress-bar {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #22c55e, #4ade80);
  border-radius: 99px;
  transform-origin: left;
  animation: progressFill 2.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
  transform: scaleX(0);
}

@keyframes progressFill {
  0% { transform: scaleX(0); }
  60% { transform: scaleX(0.7); }
  100% { transform: scaleX(1); }
}

.loader-progress-glow {
  position: absolute;
  top: -4px;
  bottom: -4px;
  left: 0;
  width: 60px;
  background: linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.4), transparent);
  border-radius: 99px;
  animation: progressGlow 1.5s ease-in-out infinite;
}

@keyframes progressGlow {
  0% { left: -60px; }
  100% { left: 100%; }
}

/* Floating code snippets */
.loader-code {
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 0.75rem;
  color: rgba(74, 222, 128, 0.15);
  font-weight: 600;
  pointer-events: none;
  animation: codeFloat 4s ease-in-out infinite;
}

.loader-code-1 {
  top: -40px;
  right: -80px;
  animation-delay: 0s;
}

.loader-code-2 {
  bottom: -30px;
  left: -70px;
  animation-delay: -1.5s;
}

.loader-code-3 {
  top: 30px;
  left: -90px;
  animation-delay: -3s;
}

@keyframes codeFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-10px) rotate(3deg); opacity: 0.6; }
}

/* Exit transition */
.loader-leave-active {
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.loader-leave-to {
  opacity: 0;
  transform: scale(1.05);
  filter: blur(8px);
}
</style>
