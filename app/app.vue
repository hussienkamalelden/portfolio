<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { init } = useDarkMode()

onMounted(() => {
  init()
})

useHead({
  title: 'CodeMorning — We Build Modern Digital Experiences',
  meta: [
    { name: 'description', content: 'CodeMorning is a software company that crafts premium websites and mobile applications.' },
  ],
  htmlAttrs: { lang: 'en' },
})
</script>
