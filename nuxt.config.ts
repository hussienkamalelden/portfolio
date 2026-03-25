export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/icon'],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  nitro: {
    preset: 'netlify-static',
    externals: {
      inline: ['vue', 'vue-router'],
    },
  },

  app: {
    head: {
      script: [
        {
          innerHTML: `(function(){try{var s=localStorage.getItem('theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}})()`,
          tagPosition: 'head',
        },
      ],
    },
  },
});
