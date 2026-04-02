<template>
  <section id="contact" class="py-24 sm:py-32">
    <div class="section-container">
      <div class="max-w-2xl mx-auto">
        <div class="text-center reveal">
          <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-accent-50 text-accent-700 dark:bg-accent-950/50 dark:text-accent-400 border border-accent-200/50 dark:border-accent-800/30 mb-6">
            <Icon name="lucide:mail" class="w-3.5 h-3.5" />
            Let's Connect
          </span>
          <h2 class="section-heading">Get in <span class="gradient-text">Touch</span></h2>
          <p class="section-subheading mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you shortly.
          </p>
        </div>

        <form ref="formRef" class="mt-12 space-y-5 reveal" @submit.prevent="handleSubmit">
          <div class="grid sm:grid-cols-2 gap-5">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
              <input
                id="name"
                v-model="form.name"
                name="from_name"
                type="text"
                required
                placeholder="Your name"
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all text-sm"
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
              <input
                id="email"
                v-model="form.email"
                name="from_email"
                type="email"
                required
                placeholder="you@example.com"
                class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all text-sm"
              >
            </div>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              name="message"
              rows="5"
              required
              placeholder="Tell us about your project..."
              class="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-500/30 focus:border-accent-500 transition-all text-sm resize-none"
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
            <p v-if="errorMsg" class="text-sm text-red-500 dark:text-red-400">
              {{ errorMsg }}
            </p>
          </Transition>

          <button
            type="submit"
            :disabled="sending || sent"
            :class="[
              'w-full btn-primary justify-center',
              (sending || sent) ? 'opacity-75 cursor-not-allowed' : '',
            ]"
          >
            <template v-if="sending">
              <Icon name="lucide:loader-2" class="w-4 h-4 mr-2 animate-spin" />
              Sending...
            </template>
            <template v-else-if="sent">
              Message Sent!
              <Icon name="lucide:check" class="w-4 h-4 ml-2" />
            </template>
            <template v-else>
              Send Message
              <Icon name="lucide:send" class="w-4 h-4 ml-2" />
            </template>
          </button>
        </form>

        <div class="mt-16 text-center reveal">
          <p class="text-sm text-gray-400 dark:text-gray-500 mb-5">Or find us on</p>
          <div class="flex justify-center gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
              class="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-accent-600 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-950/30 transition-all hover:-translate-y-0.5"
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
  // `@emailjs/browser` is a browser-only SDK; keep it out of SSR.
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
