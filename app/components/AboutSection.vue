<template>
  <section id="about" class="relative py-24 sm:py-32 bg-gray-900/30 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-400/[0.04] rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10">
      <div class="max-w-3xl mx-auto text-center reveal">
        <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-950/50 text-accent-400 border border-accent-800/30 mb-6">
          <Icon name="lucide:zap" class="w-3.5 h-3.5" />
          Who We Are
        </span>

        <h2 class="section-heading">About <span class="gradient-text">Us</span></h2>

        <p class="mt-6 text-gray-400 leading-relaxed text-lg">
          CodeMorning is a software company built on one belief: technology should solve real problems. We design, develop, and secure digital products across web, mobile, and desktop. Delivering solutions that are fast, reliable, and ready for growth.
        </p>
        <p class="mt-4 text-gray-400 leading-relaxed">
          Our team brings together deep engineering expertise with a sharp eye for design. Whether it's a high-traffic platform, a customer-facing mobile app, or a mission-critical system, we approach every project with the same commitment to quality and long-term impact.
        </p>
        <p class="mt-4 text-gray-400 leading-relaxed">
          We don't just write code. We help businesses think through the right architecture, the right tools, and the right strategy to move faster and compete smarter.
        </p>
      </div>

      <!-- Capability highlights -->
      <div class="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto reveal">
        <div
          v-for="item in capabilities"
          :key="item.label"
          class="group flex flex-col items-center gap-2 p-5 rounded-2xl bg-gray-900 border border-gray-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
        >
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-500 to-emerald-400 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Icon :name="item.icon" class="w-5 h-5 text-white" />
          </div>
          <span class="text-xs font-semibold text-gray-300 text-center">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const capabilities = [
  { icon: 'lucide:rocket', label: 'Fast Delivery' },
  { icon: 'lucide:shield-check', label: 'Secure by Design' },
  { icon: 'lucide:scaling', label: 'Built to Scale' },
  { icon: 'lucide:headset', label: 'Ongoing Support' },
]
</script>
