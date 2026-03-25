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
              class="expertise-card group relative overflow-hidden p-5 rounded-2xl bg-white dark:bg-gray-800/50 border transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              :class="area.borderClass"
            >
              <div
                class="absolute -top-12 -right-12 w-32 h-32 rounded-full opacity-[0.04] dark:opacity-[0.06] transition-transform duration-500 group-hover:scale-150"
                :class="area.blobClass"
              />

              <div class="relative flex items-center gap-3.5 mb-4">
                <div
                  class="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 group-hover:scale-110"
                  :class="area.iconBgClass"
                >
                  <Icon :name="area.icon" class="w-5 h-5" :class="area.iconColorClass" />
                </div>
                <div>
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white">{{ area.title }}</h4>
                  <p class="text-xs text-gray-400 dark:text-gray-500">{{ area.subtitle }}</p>
                </div>
              </div>

              <div class="relative flex flex-wrap gap-2">
                <span
                  v-for="tech in area.technologies"
                  :key="tech"
                  class="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium transition-colors"
                  :class="area.badgeClass"
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
    borderClass: 'border-blue-100 dark:border-blue-900/30 hover:border-blue-300 dark:hover:border-blue-700/50 hover:shadow-blue-100/40 dark:hover:shadow-blue-900/20',
    iconBgClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-600 dark:text-blue-400',
    badgeClass: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
    blobClass: 'bg-blue-500',
  },
  {
    title: 'Backend Development',
    subtitle: 'Scalable APIs, databases & cloud services',
    icon: 'lucide:server',
    technologies: ['Node.js', 'NestJS', 'Laravel', 'PostgreSQL', 'MongoDB', 'Firebase', 'Docker', 'AWS'],
    borderClass: 'border-emerald-100 dark:border-emerald-900/30 hover:border-emerald-300 dark:hover:border-emerald-700/50 hover:shadow-emerald-100/40 dark:hover:shadow-emerald-900/20',
    iconBgClass: 'bg-emerald-50 dark:bg-emerald-950/50',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400',
    badgeClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
    blobClass: 'bg-emerald-500',
  },
  {
    title: 'Mobile Development',
    subtitle: 'Cross-platform & native apps',
    icon: 'lucide:smartphone',
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift', 'Dart', 'Expo'],
    borderClass: 'border-violet-100 dark:border-violet-900/30 hover:border-violet-300 dark:hover:border-violet-700/50 hover:shadow-violet-100/40 dark:hover:shadow-violet-900/20',
    iconBgClass: 'bg-violet-50 dark:bg-violet-950/50',
    iconColorClass: 'text-violet-600 dark:text-violet-400',
    badgeClass: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
    blobClass: 'bg-violet-500',
  },
]
</script>
