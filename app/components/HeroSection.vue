<template>
  <section id="hero" class="relative min-h-screen flex items-center pt-16">
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -left-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
      <div class="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10 py-20 sm:py-32">
      <div class="max-w-3xl">
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
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
            </svg>
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
  </section>
</template>
