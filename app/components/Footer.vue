<template>
  <footer class="border-t border-gray-800">
    <div class="section-container py-10">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div class="flex items-center gap-2">
          <img src="/assets/images/logo.png" alt="CodeMorning" class="h-8 w-8 rounded-lg" />
          <span class="text-lg font-bold text-white">
            <span class="white">Code</span><span class="text-accent-400">Morning</span>
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
