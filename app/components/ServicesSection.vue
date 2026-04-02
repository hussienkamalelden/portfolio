<template>
  <section id="services" class="relative py-28 sm:py-36 overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent-500/[0.03] dark:bg-accent-400/[0.04] rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] dark:bg-violet-400/[0.04] rounded-full blur-3xl" />
      <div class="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/[0.03] dark:bg-emerald-400/[0.04] rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10">
      <!-- Header -->
      <div class="max-w-2xl mx-auto text-center mb-16 reveal">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-50 text-accent-700 dark:bg-accent-950/50 dark:text-accent-400 border border-accent-200/50 dark:border-accent-800/30 mb-6">
          <Icon name="lucide:sparkles" class="w-3.5 h-3.5" />
          Solutions That Deliver
        </span>
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
          Everything you need to
          <span class="gradient-text">
            launch & scale
          </span>
        </h2>
        <p class="mt-5 text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
          We bring together strategy, design, and engineering under one roof — so you get a seamless experience from idea to live product.
        </p>
      </div>

      <!-- Services grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="(service, idx) in services"
          :key="service.title"
          class="service-card group relative reveal"
          :style="{ animationDelay: `${idx * 0.06}s` }"
        >
          <!-- Animated gradient border -->
          <div
            class="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"
            :class="service.borderGradient"
          />

          <!-- Card body -->
          <div class="relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 h-full flex flex-col overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl group-hover:shadow-gray-200/50 dark:group-hover:shadow-black/40 group-hover:-translate-y-2">
            <!-- Decorative blob -->
            <div
              class="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-[0.06] dark:opacity-[0.08] transition-all duration-700 group-hover:scale-[2] group-hover:opacity-[0.1] dark:group-hover:opacity-[0.14]"
              :class="service.blobClass"
            />

            <!-- Shine effect -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/80 via-transparent to-transparent dark:from-white/[0.03] pointer-events-none rounded-3xl" />

            <!-- Icon -->
            <div class="relative mb-5">
              <div
                class="w-14 h-14 rounded-2xl flex items-center justify-center ring-1 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg"
                :class="[service.iconBgClass, service.ringClass, service.shadowClass]"
              >
                <Icon :name="service.icon" class="w-6 h-6 transition-transform duration-500 group-hover:scale-110" :class="service.iconColorClass" />
              </div>
            </div>

            <!-- Content -->
            <h3 class="relative text-[15px] font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r" :class="service.titleHoverGradient">
              {{ service.title }}
            </h3>
            <p class="relative text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
              {{ service.description }}
            </p>

            <!-- Highlights -->
            <div class="relative mt-4 flex flex-wrap gap-1.5">
              <span
                v-for="tag in service.highlights"
                :key="tag"
                class="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium transition-colors duration-300"
                :class="service.tagClass"
              >
                {{ tag }}
              </span>
            </div>

          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center reveal">
        <p class="text-gray-500 dark:text-gray-400 mb-6">
          Have a project in mind? Let's turn your vision into reality.
        </p>
        <a href="#contact" class="btn-primary inline-flex items-center gap-2 text-base px-8 py-3.5">
          Start a Conversation
          <Icon name="lucide:arrow-right" class="w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    title: 'Web Applications',
    description:
      'Custom web platforms, dashboards, and SaaS products engineered for performance and built around your business needs.',
    icon: 'lucide:globe',
    highlights: ['Platforms', 'Dashboards', 'SaaS', 'Portals'],
    iconBgClass: 'bg-blue-50 dark:bg-blue-950/50',
    iconColorClass: 'text-blue-600 dark:text-blue-400',
    ringClass: 'ring-blue-100 dark:ring-blue-900/40',
    shadowClass: 'group-hover:shadow-blue-200/50 dark:group-hover:shadow-blue-900/30',
    borderGradient: 'bg-gradient-to-br from-blue-400 via-blue-500/50 to-transparent',
    blobClass: 'bg-blue-500',
    tagClass: 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
    titleHoverGradient: 'group-hover:from-blue-600 group-hover:to-blue-400',
  },
  {
    title: 'Mobile Applications',
    description:
      'Polished iOS and Android apps that feel native, load instantly, and keep users coming back.',
    icon: 'lucide:smartphone',
    highlights: ['iOS', 'Android', 'Cross-platform', 'Wearables'],
    iconBgClass: 'bg-violet-50 dark:bg-violet-950/50',
    iconColorClass: 'text-violet-600 dark:text-violet-400',
    ringClass: 'ring-violet-100 dark:ring-violet-900/40',
    shadowClass: 'group-hover:shadow-violet-200/50 dark:group-hover:shadow-violet-900/30',
    borderGradient: 'bg-gradient-to-br from-violet-400 via-violet-500/50 to-transparent',
    blobClass: 'bg-violet-500',
    tagClass: 'bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-300',
    titleHoverGradient: 'group-hover:from-violet-600 group-hover:to-violet-400',
  },
  {
    title: 'Desktop Applications',
    description:
      'Powerful cross-platform desktop software with rich interfaces, offline support, and system-level integration.',
    icon: 'lucide:monitor',
    highlights: ['Windows', 'macOS', 'Linux', 'Cross-platform'],
    iconBgClass: 'bg-indigo-50 dark:bg-indigo-950/50',
    iconColorClass: 'text-indigo-600 dark:text-indigo-400',
    ringClass: 'ring-indigo-100 dark:ring-indigo-900/40',
    shadowClass: 'group-hover:shadow-indigo-200/50 dark:group-hover:shadow-indigo-900/30',
    borderGradient: 'bg-gradient-to-br from-indigo-400 via-indigo-500/50 to-transparent',
    blobClass: 'bg-indigo-500',
    tagClass: 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300',
    titleHoverGradient: 'group-hover:from-indigo-600 group-hover:to-indigo-400',
  },
  {
    title: 'UI / UX Design',
    description:
      'Research-driven interfaces and seamless user journeys that look stunning and convert visitors into customers.',
    icon: 'lucide:palette',
    highlights: ['User Research', 'Prototyping', 'Design Systems', 'Branding'],
    iconBgClass: 'bg-pink-50 dark:bg-pink-950/50',
    iconColorClass: 'text-pink-600 dark:text-pink-400',
    ringClass: 'ring-pink-100 dark:ring-pink-900/40',
    shadowClass: 'group-hover:shadow-pink-200/50 dark:group-hover:shadow-pink-900/30',
    borderGradient: 'bg-gradient-to-br from-pink-400 via-pink-500/50 to-transparent',
    blobClass: 'bg-pink-500',
    tagClass: 'bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300',
    titleHoverGradient: 'group-hover:from-pink-600 group-hover:to-pink-400',
  },
  {
    title: 'Cyber Security',
    description:
      'Comprehensive security audits, penetration testing, and hardened architectures that protect your data and your users.',
    icon: 'lucide:shield-check',
    highlights: ['Pen Testing', 'Audits', 'Encryption', 'Compliance'],
    iconBgClass: 'bg-red-50 dark:bg-red-950/50',
    iconColorClass: 'text-red-600 dark:text-red-400',
    ringClass: 'ring-red-100 dark:ring-red-900/40',
    shadowClass: 'group-hover:shadow-red-200/50 dark:group-hover:shadow-red-900/30',
    borderGradient: 'bg-gradient-to-br from-red-400 via-red-500/50 to-transparent',
    blobClass: 'bg-red-500',
    tagClass: 'bg-red-50 text-red-700 dark:bg-red-950/40 dark:text-red-300',
    titleHoverGradient: 'group-hover:from-red-600 group-hover:to-red-400',
  },
  {
    title: 'Cloud & Infrastructure',
    description:
      'Reliable cloud architecture, automated deployments, and monitoring that keeps everything running at any scale.',
    icon: 'lucide:cloud',
    highlights: ['CI / CD', 'DevOps', 'Monitoring', 'Scaling'],
    iconBgClass: 'bg-emerald-50 dark:bg-emerald-950/50',
    iconColorClass: 'text-emerald-600 dark:text-emerald-400',
    ringClass: 'ring-emerald-100 dark:ring-emerald-900/40',
    shadowClass: 'group-hover:shadow-emerald-200/50 dark:group-hover:shadow-emerald-900/30',
    borderGradient: 'bg-gradient-to-br from-emerald-400 via-emerald-500/50 to-transparent',
    blobClass: 'bg-emerald-500',
    tagClass: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
    titleHoverGradient: 'group-hover:from-emerald-600 group-hover:to-emerald-400',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'End-to-end online stores with secure checkout, inventory management, and analytics built to maximize revenue.',
    icon: 'lucide:shopping-bag',
    highlights: ['Online Stores', 'Payments', 'Inventory', 'Analytics'],
    iconBgClass: 'bg-amber-50 dark:bg-amber-950/50',
    iconColorClass: 'text-amber-600 dark:text-amber-400',
    ringClass: 'ring-amber-100 dark:ring-amber-900/40',
    shadowClass: 'group-hover:shadow-amber-200/50 dark:group-hover:shadow-amber-900/30',
    borderGradient: 'bg-gradient-to-br from-amber-400 via-amber-500/50 to-transparent',
    blobClass: 'bg-amber-500',
    tagClass: 'bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
    titleHoverGradient: 'group-hover:from-amber-600 group-hover:to-amber-400',
  },
  {
    title: 'Consulting & Strategy',
    description:
      'Technical audits, architecture planning, and strategic guidance to help you make the right decisions early.',
    icon: 'lucide:lightbulb',
    highlights: ['Tech Audits', 'Architecture', 'Roadmaps', 'Workshops'],
    iconBgClass: 'bg-cyan-50 dark:bg-cyan-950/50',
    iconColorClass: 'text-cyan-600 dark:text-cyan-400',
    ringClass: 'ring-cyan-100 dark:ring-cyan-900/40',
    shadowClass: 'group-hover:shadow-cyan-200/50 dark:group-hover:shadow-cyan-900/30',
    borderGradient: 'bg-gradient-to-br from-cyan-400 via-cyan-500/50 to-transparent',
    blobClass: 'bg-cyan-500',
    tagClass: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300',
    titleHoverGradient: 'group-hover:from-cyan-600 group-hover:to-cyan-400',
  },
]
</script>

<style scoped>
.service-card {
  perspective: 800px;
}
</style>
