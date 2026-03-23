<template>
  <section id="about" class="py-24 sm:py-32 bg-gray-50/50 dark:bg-gray-900/30">
    <div class="section-container">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
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
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-6">
            Technologies We Work With
          </h3>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div
              v-for="skill in skills"
              :key="skill.name"
              class="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 hover:border-accent-200 dark:hover:border-accent-800 transition-colors group"
            >
              <div class="w-9 h-9 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
                {{ skill.icon }}
              </div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Vue.js', icon: '💚' },
  { name: 'Nuxt', icon: '🟢' },
  { name: 'React', icon: '⚛️' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'Flutter', icon: '🦋' },
  { name: 'React Native', icon: '📱' },
  { name: 'TailwindCSS', icon: '🎨' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Figma', icon: '🎯' },
]
</script>
