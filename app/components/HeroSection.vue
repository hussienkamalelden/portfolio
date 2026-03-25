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
        <!-- Right text (on lg: right, on mobile: first) -->
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
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-600 to-accent-500">
                digital experiences
              </span>
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s">
              Devora crafts premium websites and mobile applications that help businesses grow, engage users, and stand out.
            </p>

            <div class="mt-10 flex flex-wrap gap-4 animate-fade-in-up" style="animation-delay: 0.3s">
              <a href="#projects" class="btn-primary">
                View Our Work
                <Icon name="lucide:arrow-up-right" class="w-4 h-4 ml-2" />
              </a>
              <a href="#contact" class="btn-secondary">
                Contact Us
              </a>
            </div>

            <div class="mt-16 flex items-center gap-8 text-sm text-gray-400 dark:text-gray-500 animate-fade-in-up" style="animation-delay: 0.4s">
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">50+</span>
                Projects delivered
              </div>
              <div class="w-px h-10 bg-gray-200 dark:bg-gray-800" />
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">30+</span>
                Happy clients
              </div>
              <div class="w-px h-10 bg-gray-200 dark:bg-gray-800" />
              <div class="flex flex-col">
                <span class="text-2xl font-bold text-gray-900 dark:text-white">5+</span>
                Years of experience
              </div>
            </div>
          </div>
        </div>

        <!-- Left photo card (on lg: left, on mobile: second) -->
        <div class="relative z-10 order-2 lg:order-1 mt-10 lg:mt-0">
          <div
            class="absolute -inset-6 rounded-[2rem] blur-3xl pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(42,140,255,0.35),transparent_55%)]"
          />

          <div
            class="hero-photo-card relative h-[520px] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-gray-800 bg-white/5 shadow-[0_30px_80px_rgba(15,23,42,0.22)]"
          >
            <div class="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent z-[1]" />
            <img
              :src="heroImage"
              :alt="heroImageAlt"
              class="relative z-[0] w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-110"
              loading="lazy"
            >

            <div class="absolute bottom-6 left-6 right-6 z-[2] pointer-events-none" aria-hidden="true">
              <span class="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/85 dark:bg-gray-950/70 backdrop-blur-md border border-white/60 dark:border-gray-800/50">
                <span class="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                <span class="text-sm font-medium text-gray-900 dark:text-white">
                  Let's build something great
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const heroImage = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80'
const heroImageAlt = 'Developer working on a laptop'
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

.hero-photo-bg {
  background: radial-gradient(circle at 30% 20%, rgba(42, 140, 255, 0.35), transparent 55%);
  z-index: 0;
}

.hero-photo-card {
  position: relative;
  z-index: 1;
  height: 520px;
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid rgba(229, 231, 235, 1);
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 30px 80px rgba(15, 23, 42, 0.22);
  animation: heroFloat 5.5s ease-in-out infinite;
}

.hero-photo-card img {
  width: 100%;
  height: 100%;
}

.hero-photo-card:hover img {
  transform: scale(1.08);
}

.hero-photo-callout {
  position: absolute;
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 2;
}

.hero-photo-card {
  animation: heroFloat 5.5s ease-in-out infinite;
}

@keyframes heroFloat {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@media (prefers-reduced-motion: reduce) {
  .hero-photo-card {
    animation: none;
  }
}
</style>
