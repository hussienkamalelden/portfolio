<template>
  <section id="about" class="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-900/30">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <div class="reveal">
          <h2 class="section-heading">About Us</h2>
          <p class="mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
            Devora is a team of passionate developers and designers dedicated to building digital products that matter. We combine clean code with thoughtful design to create experiences that are fast, accessible, and delightful.
          </p>
          <p class="mt-4 text-gray-500 dark:text-gray-400 leading-relaxed">
            From startups to established brands, we partner with clients who value quality craftsmanship and attention to detail. Every project we take on is an opportunity to push boundaries and deliver excellence.
          </p>

          <div class="mt-8 flex items-center gap-6">
            <div class="flex -space-x-2">
              <div v-for="i in 4" :key="i" class="w-10 h-10 rounded-full border-2 border-white dark:border-gray-900 bg-gradient-to-br from-accent-400 to-accent-600 flex items-center justify-center text-white text-xs font-bold">
                {{ ['H', 'A', 'S', 'M'][i - 1] }}
              </div>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              A small team with big ambitions
            </p>
          </div>
        </div>

        <div class="reveal">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            What We Do
          </h3>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-6">
            We adapt to your needs — using the best tools for each project, not a one-size-fits-all stack.
          </p>

          <div class="space-y-4">
            <div
              v-for="area in expertiseAreas"
              :key="area.title"
              class="p-4 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-accent-200 dark:hover:border-accent-800 transition-colors"
            >
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-950/40 flex items-center justify-center text-accent-600 dark:text-accent-400">
                  <Icon :name="area.icon" class="w-5 h-5" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ area.title }}</h4>
                  <p class="text-xs text-gray-400 dark:text-gray-500">{{ area.subtitle }}</p>
                </div>
              </div>
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in area.technologies"
                  :key="tech"
                  class="badge"
                >
                  {{ tech }}
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
const expertiseAreas = [
  {
    title: 'Frontend Development',
    subtitle: 'Modern, responsive & performant interfaces',
    icon: 'lucide:monitor',
    technologies: ['Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'GSAP'],
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable APIs, databases & cloud services',
    icon: 'lucide:server',
    technologies: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS'],
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-platform & native apps',
    icon: 'lucide:smartphone',
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Dart', 'Expo'],
  },
]
</script>
