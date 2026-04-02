<template>
  <footer class="border-t border-gray-800">
    <div class="section-container py-10">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-white">
            <span class="gradient-text">CodeMorning</span><span class="text-violet-500">.</span>
          </span>
        </div>

        <span class="hidden sm:block text-gray-700">&middot;</span>

        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} CodeMorning. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
