<template>
  <div class="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
    <div class="text-center max-w-md">
      <h1 class="text-7xl font-bold text-blue-500 dark:text-blue-400">
        {{ error?.statusCode || 500 }}
      </h1>

      <p class="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-100">
        {{ title }}
      </p>

      <p class="mt-2 text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>

      <button
        class="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
        @click="handleError"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps<{ error: NuxtError }>()

const is404 = computed(() => props.error?.statusCode === 404)

const title = computed(() =>
  is404.value ? 'Page not found' : 'Something went wrong',
)

const description = computed(() =>
  is404.value
    ? "The page you're looking for doesn't exist or has been moved."
    : 'An unexpected error occurred. Please try again.',
)

function handleError() {
  clearError({ redirect: '/' })
}

useHead({
  title: computed(() => `${props.error?.statusCode || 'Error'} — CodeMorning`),
})
</script>
