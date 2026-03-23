<template>
  <section id="projects" class="py-24 sm:py-32">
    <div class="section-container">
      <div class="text-center reveal">
        <h2 class="section-heading">Our Work</h2>
        <p class="section-subheading mx-auto">
          A curated selection of projects we've crafted for clients across industries.
        </p>
      </div>

      <div class="mt-12 flex justify-center reveal">
        <div class="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800/50">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            :class="[
              'px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300',
              activeTab === tab.key
                ? 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300',
            ]"
            @click="activeTab = tab.key"
          >
            {{ tab.label }}
          </button>
        </div>
      </div>

      <Transition
        mode="out-in"
        enter-active-class="transition-all duration-400 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div :key="activeTab" class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            v-for="(project, index) in activeProjects"
            :key="project.id"
            :project="project"
            class="animate-fade-in-up"
            :style="{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }"
          />
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
const store = useProjectsStore()

const activeTab = ref<'websites' | 'mobileApps'>('websites')

const tabs = [
  { key: 'websites' as const, label: 'Websites' },
  { key: 'mobileApps' as const, label: 'Mobile Apps' },
]

const activeProjects = computed(() =>
  activeTab.value === 'websites' ? store.websites : store.mobileApps,
)
</script>
