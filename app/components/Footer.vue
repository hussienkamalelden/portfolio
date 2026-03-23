<template>
  <footer class="border-t border-gray-100 dark:border-gray-800">
    <div class="section-container py-10">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-gray-900 dark:text-white">
            Devora<span class="text-accent-600">.</span>
          </span>
        </div>

        <p class="text-sm text-gray-400 dark:text-gray-500">
          &copy; {{ new Date().getFullYear() }} Devora. All rights reserved.
        </p>

        <div class="flex items-center gap-6">
          <a
            v-for="item in links"
            :key="item.href"
            :href="item.href"
            class="text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const links = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]
</script>
