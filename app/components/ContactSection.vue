<template>
  <section id="contact" class="relative py-24 sm:py-32 overflow-hidden">
    <!-- Background glow -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/[0.06] rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-500/[0.05] rounded-full blur-3xl" />
    </div>

    <div class="section-container relative z-10">
      <div class="max-w-2xl mx-auto">
        <div class="text-center reveal">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-950/50 text-accent-400 border border-accent-800/30 mb-6">
            <Icon name="lucide:mail" class="w-3.5 h-3.5" />
            Let's Connect
          </span>
          <h2 class="section-heading">Get in <span class="gradient-text">Touch</span></h2>
          <p class="section-subheading mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <!-- Form card with glass effect -->
        <div class="mt-12 rounded-3xl bg-gray-900/60 backdrop-blur-xl border border-gray-800/80 p-6 sm:p-8 shadow-2xl shadow-black/20 reveal">
          <form ref="formRef" class="space-y-5" @submit.prevent="handleSubmit">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-300 mb-1.5">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Your name"
                  class="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/60 transition-all text-sm"
                >
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1.5">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  class="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/60 transition-all text-sm"
                >
              </div>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-300 mb-1.5">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                name="message"
                rows="5"
                required
                placeholder="Tell us about your project..."
                class="w-full px-4 py-3 rounded-xl bg-gray-800/60 border border-gray-700/60 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-500/60 transition-all text-sm resize-none"
              />
            </div>

            <Transition
              enter-active-class="transition-all duration-300"
              enter-from-class="opacity-0 -translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <p v-if="errorMsg" class="text-sm text-red-400">
                {{ errorMsg }}
              </p>
            </Transition>

            <button
              type="submit"
              :disabled="sending || sent"
              class="contact-submit-btn w-full"
              :class="(sending || sent) ? 'opacity-75 cursor-not-allowed' : ''"
            >
              <span class="contact-submit-btn-glow" />
              <span class="relative z-10 inline-flex items-center justify-center gap-2">
                <template v-if="sending">
                  <Icon name="lucide:loader-2" class="w-4 h-4 animate-spin" />
                  Sending...
                </template>
                <template v-else-if="sent">
                  Message Sent!
                  <Icon name="lucide:check" class="w-4 h-4" />
                </template>
                <template v-else>
                  Send Message
                  <Icon name="lucide:send" class="w-4 h-4" />
                </template>
              </span>
            </button>
          </form>
        </div>

        <div class="mt-16 text-center reveal">
          <p class="text-sm text-gray-500 mb-5">Or find us on</p>
          <div class="flex justify-center gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-10 h-10 rounded-xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-gray-400 hover:text-accent-400 hover:bg-accent-950/40 hover:border-accent-800/40 hover:shadow-lg hover:shadow-accent-500/10 transition-all hover:-translate-y-0.5"
            >
              <Icon :name="social.icon" class="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const EMAILJS_SERVICE_ID = 'service_coq0tnf'
const EMAILJS_TEMPLATE_ID = 'template_jru0krp'
const EMAILJS_PUBLIC_KEY = 'xHxoTSp5tRk0Dc-mV'

const formRef = ref<HTMLFormElement | null>(null)

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const sending = ref(false)
const sent = ref(false)
const errorMsg = ref('')

async function handleSubmit() {
  if (!import.meta.client) return

  if (!formRef.value) return

  sending.value = true
  errorMsg.value = ''

  try {
    const mod = await import('@emailjs/browser')
    const emailjs = mod.default

    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      formRef.value,
      EMAILJS_PUBLIC_KEY,
    )

    sent.value = true
    form.name = ''
    form.email = ''
    form.message = ''

    setTimeout(() => {
      sent.value = false
    }, 4000)
  }
  catch {
    errorMsg.value = 'Something went wrong. Please try again or email us directly.'
  }
  finally {
    sending.value = false
  }
}

const socials = [
  { name: 'Facebook', url: 'https://www.linkedin.com/company/codemorning/', icon: 'simple-icons:facebook' },
  { name: 'Twitter', url: 'https://www.linkedin.com/company/codemorning/', icon: 'simple-icons:x' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/codemorning/', icon: 'simple-icons:linkedin' },
  { name: 'WhatsApp', url: 'https://wa.me/201119084411', icon: 'simple-icons:whatsapp' },
]
</script>

<style scoped>
.contact-submit-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 1.5rem;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 0.9375rem;
  color: white;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.3), rgba(16, 163, 74, 0.22));
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(74, 222, 128, 0.4);
  transition: all 0.3s ease-out;
  overflow: hidden;
  box-shadow:
    0 0 20px rgba(34, 197, 94, 0.15),
    0 0 40px rgba(16, 163, 74, 0.08);
}

.contact-submit-btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(16, 163, 74, 0.08));
  opacity: 0;
  transition: opacity 0.3s ease-out;
}

.contact-submit-btn:hover .contact-submit-btn-glow {
  opacity: 1;
}

.contact-submit-btn:hover {
  border-color: rgba(74, 222, 128, 0.55);
  box-shadow:
    0 0 30px rgba(34, 197, 94, 0.25),
    0 0 60px rgba(16, 163, 74, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transform: translateY(-2px);
}

.contact-submit-btn:active {
  transform: translateY(0) scale(0.98);
}
</style>
