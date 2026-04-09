<template>
  <section id="process" class="relative py-24 sm:py-32 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent-400/[0.04] rounded-full blur-3xl" />
      <div class="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-400/[0.04] rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10">
      <div class="text-center mb-16 reveal">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-950/50 text-accent-400 border border-accent-800/30 mb-6">
          <Icon name="lucide:route" class="w-3.5 h-3.5" />
          From Idea to Launch
        </span>
        <h2 class="section-heading">How We <span class="gradient-text">Work</span></h2>
        <p class="section-subheading mx-auto">
          A clear, collaborative process that keeps you in the loop at every stage — no surprises, just results.
        </p>
      </div>

      <div class="relative">
        <!-- Connecting line -->
        <div class="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2">
          <div class="h-full bg-gradient-to-r from-transparent via-accent-700/20 to-transparent" />
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div
            v-for="(step, idx) in steps"
            :key="step.title"
            class="group relative reveal"
            :style="{ animationDelay: `${idx * 0.08}s` }"
          >
            <div class="relative rounded-3xl bg-gray-900/70 backdrop-blur-xl border border-gray-800 p-7 h-full flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:border-accent-800/30 hover:shadow-xl hover:shadow-accent-950/20">
              <!-- Step number badge -->
              <div class="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gray-900 border border-accent-800/40 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:border-accent-600">
                <span class="text-[11px] font-bold gradient-text">{{ idx + 1 }}</span>
              </div>

              <!-- Icon -->
              <div class="mt-2 mb-5 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110" :class="step.iconBgClass">
                <Icon :name="step.icon" class="w-6 h-6" :class="step.iconColorClass" />
              </div>

              <h3 class="text-base font-semibold text-white mb-2">
                {{ step.title }}
              </h3>
              <p class="text-sm text-gray-400 leading-relaxed flex-1">
                {{ step.description }}
              </p>

              <!-- Deliverables -->
              <div class="mt-5 w-full pt-4 border-t border-gray-800">
                <div class="flex flex-wrap justify-center gap-1.5">
                  <span
                    v-for="item in step.deliverables"
                    :key="item"
                    class="px-2 py-0.5 rounded-md text-[11px] font-medium bg-gray-800 text-gray-400 border border-gray-700/50"
                  >
                    {{ item }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Discovery',
    description: 'We listen, research, and define the scope. Together we map out goals, requirements, and a clear roadmap before any code is written.',
    icon: 'lucide:search',
    iconBgClass: 'bg-blue-950/50',
    iconColorClass: 'text-blue-400',
    deliverables: ['Requirements', 'Research', 'Roadmap'],
  },
  {
    title: 'Design',
    description: 'Wireframes and high-fidelity prototypes that bring your idea to life visually — iterated with your feedback until every detail is right.',
    icon: 'lucide:pen-tool',
    iconBgClass: 'bg-violet-950/50',
    iconColorClass: 'text-violet-400',
    deliverables: ['Wireframes', 'Prototypes', 'UI Kit'],
  },
  {
    title: 'Development',
    description: 'Clean, tested, production-ready code delivered in sprints. You see real progress every week and can steer direction as we build.',
    icon: 'lucide:code-2',
    iconBgClass: 'bg-emerald-950/50',
    iconColorClass: 'text-emerald-400',
    deliverables: ['Sprints', 'Testing', 'Reviews'],
  },
  {
    title: 'Launch & Support',
    description: 'We deploy, monitor, and stand by your product post-launch. Ongoing maintenance ensures everything stays fast, secure, and reliable.',
    icon: 'lucide:rocket',
    iconBgClass: 'bg-amber-950/50',
    iconColorClass: 'text-amber-400',
    deliverables: ['Deployment', 'Monitoring', 'Updates'],
  },
]
</script>
