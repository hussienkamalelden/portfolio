<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-16">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <ClientOnly>
        <HeroD3Backdrop />
      </ClientOnly>
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10 py-20 sm:py-32">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Right text -->
        <div class="relative z-20 order-1 lg:order-2">
          <div class="hero-text-backdrop rounded-3xl -mx-6 -my-4 px-6 py-4 sm:-mx-8 sm:px-8">
            <div class="animate-fade-in-down">
              <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-50 text-accent-700 dark:bg-accent-950/50 dark:text-accent-400 border border-accent-200/50 dark:border-accent-800/30">
                <span class="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                Available for new projects
              </span>
            </div>

            <h1 class="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up" style="animation-delay: 0.1s">
              We build modern
              <span class="gradient-text">
                digital experiences
              </span>
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
              CodeMorning crafts premium websites and mobile applications that help businesses grow, engage users, and stand out.
            </p>

            <div class="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.3s">
              <a href="#services" class="btn-primary">
                Explore Services
                <Icon name="lucide:arrow-up-right" class="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" class="btn-secondary">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <!-- Left: stacked floating cards -->
        <div class="relative z-10 order-2 lg:order-1 mt-10 lg:mt-0">
          <div
            class="absolute -inset-6 rounded-[2rem] blur-3xl pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(42,140,255,0.35),transparent_55%)]"
          />

          <div class="hero-stack relative h-[520px]">
            <div
              v-for="(slide, idx) in slides"
              :key="slide.label"
              class="hero-card absolute inset-0 rounded-[2rem] overflow-hidden border bg-white/5"
              :class="cardClasses(idx)"
              :style="cardStyle(idx)"
            >
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent z-[1]" />
              <img
                :src="slide.image"
                :alt="slide.alt"
                class="relative z-[0] w-full h-full object-cover scale-105"
                :loading="idx === 0 ? 'eager' : 'lazy'"
                :fetchpriority="idx === 0 ? 'high' : 'low'"
                width="800"
                height="520"
                decoding="async"
              >
              <div class="absolute bottom-6 left-6 right-6 z-[2] pointer-events-none" aria-hidden="true">
                <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/85 dark:bg-gray-950/70 backdrop-blur-md border border-white/60 dark:border-gray-800/50">
                  <span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                  <span class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ slide.label }}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const slides = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=75',
    alt: 'Web platform dashboard on screen',
    label: 'Web Platforms',
  },
  {
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=75',
    alt: 'Mobile application on smartphone',
    label: 'Mobile Apps',
  },
  {
    image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=800&q=75',
    alt: 'Desktop software on workstation',
    label: 'Desktop Software',
  },
]

const activeIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % slides.length
  }, 4000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

function getPosition(idx: number): 'front' | 'back-left' | 'back-right' {
  const diff = (idx - activeIndex.value + slides.length) % slides.length
  if (diff === 0) return 'front'
  if (diff === 1) return 'back-right'
  return 'back-left'
}

function cardClasses(idx: number) {
  const pos = getPosition(idx)
  return {
    'border-gray-100 dark:border-gray-800 shadow-[0_30px_80px_rgba(15,23,42,0.22)]': pos === 'front',
    'border-gray-200/40 dark:border-gray-700/30': pos !== 'front',
  }
}

function cardStyle(idx: number) {
  const pos = getPosition(idx)
  if (pos === 'front') {
    return { zIndex: 30, transform: 'rotate(0deg) translateX(0) scale(1)', opacity: 1 }
  }
  if (pos === 'back-right') {
    return { zIndex: 20, transform: 'rotate(6deg) translateX(20px) scale(0.94)', opacity: 0.55 }
  }
  return { zIndex: 10, transform: 'rotate(-6deg) translateX(-20px) scale(0.88)', opacity: 0.35 }
}
</script>

<style scoped>
.hero-text-backdrop {
  background: radial-gradient(
    ellipse 120% 100% at 0% 50%,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 55%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

:root.dark .hero-text-backdrop {
  background: radial-gradient(
    ellipse 120% 100% at 0% 50%,
    rgba(3, 7, 18, 0.78) 0%,
    rgba(3, 7, 18, 0.50) 55%,
    rgba(3, 7, 18, 0) 100%
  );
}

.hero-stack {
  animation: heroFloat 5.5s ease-in-out infinite;
}

.hero-card {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 0.7s ease;
}

@keyframes heroFloat {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-stack {
    animation: none;
  }
  .hero-card {
    transition: none;
  }
}
</style>
