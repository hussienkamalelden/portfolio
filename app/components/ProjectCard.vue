<template>
  <div
    class="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-1"
  >
    <div
      class="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      <div
        class="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
      >
        <div v-if="project.links?.length" class="flex flex-wrap gap-2">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium hover:bg-white transition-colors"
            :aria-label="`${project.title} - ${link.label}`"
          >
            {{ link.label }}
          </a>
        </div>
        <a
          v-else-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium hover:bg-white transition-colors"
        >
          View Project
          <Icon name="lucide:arrow-up-right" class="w-3.5 h-3.5" />
        </a>
      </div>
    </div>

    <div class="p-5">
      <a
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="text-base font-semibold text-gray-900 dark:text-white group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors"
      >
        {{ project.title }}
      </a>

      <p
        class="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2"
      >
        {{ project.description }}
      </p>
      <div class="mt-4 flex flex-wrap gap-1.5">
        <span v-for="tech in project.techStack" :key="tech" class="badge">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/stores/projects';

defineProps<{
  project: Project;
}>();
</script>
