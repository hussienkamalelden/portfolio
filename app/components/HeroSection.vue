<template>
  <section id="hero" class="relative h-screen flex items-center overflow-hidden bg-gray-950">
    <!-- Video background (deferred — not in initial HTML) -->
    <div class="absolute inset-0 z-0">
      <video
        v-if="showVideo"
        ref="videoEl"
        class="w-full h-full object-cover transition-opacity duration-1000"
        :class="videoReady ? 'opacity-100' : 'opacity-0'"
        muted
        loop
        playsinline
        preload="auto"
        src="/assets/videos/world.mp4"
        @canplay="onCanPlay"
      />
      <div class="absolute inset-0 bg-black/75" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
    </div>

    <!-- Content layer -->
    <div class="section-container relative z-10 py-20 sm:py-32">
      <div class="max-w-3xl">
        <div class="animate-fade-in-down">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white border border-white/20 backdrop-blur-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            Available for new projects
          </span>
        </div>

        <h1 class="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white animate-fade-in-up" style="animation-delay: 0.1s">
          We build modern
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-violet-400">
            digital experiences
          </span>
        </h1>

        <p class="mt-6 text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
          CodeMorning crafts premium websites and mobile applications that help businesses grow, engage users, and stand out.
        </p>

        <div class="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.3s">
          <a href="#services" class="hero-btn-primary">
            Explore Services
            <Icon name="lucide:arrow-up-right" class="w-4 h-4 ml-2" />
          </a>
          <a href="#contact" class="hero-btn-secondary">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const videoEl = ref<HTMLVideoElement | null>(null)
const showVideo = ref(false)
const videoReady = ref(false)

function onCanPlay() {
  videoEl.value?.play().catch(() => {})
  videoReady.value = true
}

onMounted(() => {
  // Defer video element creation until after first paint
  requestAnimationFrame(() => {
    showVideo.value = true
  })
})
</script>

<style scoped>
.hero-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 500;
  font-size: 0.875rem;
  color: white;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease-out;
}

.hero-btn-primary:hover {
  background: rgba(255, 255, 255, 0.18);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.2), 0 0 40px rgba(139, 92, 246, 0.08);
  transform: translateY(-2px);
}

.hero-btn-primary:active {
  transform: translateY(0) scale(0.97);
}

.hero-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: white;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.45), rgba(139, 92, 246, 0.35));
  border: 1px solid rgba(129, 140, 248, 0.5);
  transition: all 0.3s ease-out;
  box-shadow:
    0 0 18px rgba(99, 102, 241, 0.12),
    0 0 36px rgba(139, 92, 246, 0.06);
}

.hero-btn-secondary:hover {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.55), rgba(139, 92, 246, 0.45));
  border-color: rgba(129, 140, 248, 0.65);
  box-shadow:
    0 0 25px rgba(99, 102, 241, 0.22),
    0 0 50px rgba(139, 92, 246, 0.12);
  transform: translateY(-2px);
}

.hero-btn-secondary:active {
  transform: translateY(0) scale(0.97);
}
</style>
