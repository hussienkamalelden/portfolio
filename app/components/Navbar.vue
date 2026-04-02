<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-sm shadow-gray-200/50 dark:shadow-gray-800/50'
        : 'bg-transparent',
    ]"
  >
    <div class="section-container">
      <div class="flex items-center justify-between h-16 sm:h-18">
        <a href="#" class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <span class="gradient-text">CodeMorning</span><span class="text-violet-500">.</span>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="[
              'relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              activeSection === item.href.slice(1)
                ? 'text-accent-600 dark:text-accent-400'
                : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/60 dark:hover:bg-gray-800/40',
            ]"
          >
            {{ item.label }}
            <span
              :class="[
                'absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-accent-500 transition-all duration-300',
                activeSection === item.href.slice(1) ? 'w-4 opacity-100' : 'w-0 opacity-0',
              ]"
            />
          </a>
        </div>

        <div class="flex items-center gap-3">
          <button
            aria-label="Toggle dark mode"
            class="p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"
            @click="toggle"
          >
            <Icon v-if="isDark" name="lucide:sun" class="w-5 h-5" />
            <Icon v-else name="lucide:moon" class="w-5 h-5" />
          </button>

          <button
            class="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 transition-all"
            aria-label="Toggle menu"
            @click="menuOpen = !menuOpen"
          >
            <Icon v-if="!menuOpen" name="lucide:menu" class="w-5 h-5" />
            <Icon v-else name="lucide:x" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="menuOpen"
          class="md:hidden pb-4 border-t border-gray-100 dark:border-gray-800 mt-1"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            :class="[
              'block py-3 text-sm font-medium transition-colors',
              activeSection === item.href.slice(1)
                ? 'text-accent-600 dark:text-accent-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
            ]"
            @click="menuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { isDark, toggle } = useDarkMode()

const menuOpen = ref(false)
const scrolled = ref(false)
const activeSection = ref('hero')

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'Process', href: '#process' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navItems.map(item => item.href.slice(1))

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => {
          const ai = sectionIds.indexOf(a.target.id)
          const bi = sectionIds.indexOf(b.target.id)
          return ai - bi
        })

      if (visible.length > 0) {
        activeSection.value = visible[0]!.target.id
      }
    },
    { threshold: 0.15, rootMargin: '-80px 0px -35% 0px' },
  )

  for (const id of sectionIds) {
    const el = document.getElementById(id)
    if (el) observer.observe(el)
  }

  onBeforeUnmount(() => observer.disconnect())
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function handleScroll() {
  scrolled.value = window.scrollY > 20
}
</script>
