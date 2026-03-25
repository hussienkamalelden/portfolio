export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  app: {
    head: {
      script: [
        {
          // Blocking script that runs before anything paints.
          // Reads saved theme from localStorage (or system preference)
          // and sets the `dark` class on <html> immediately.
          innerHTML: `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          tagPosition: 'head',
        },
      ],
    },
  },
});
