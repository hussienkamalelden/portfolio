export function useDarkMode() {
  const isDark = useState('darkMode', () => false)

  function toggle() {
    isDark.value = !isDark.value
    applyTheme()
  }

  function applyTheme() {
    if (import.meta.client) {
      document.documentElement.classList.toggle('dark', isDark.value)
      localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    }
  }

  function init() {
    if (import.meta.client) {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        isDark.value = true
      }
      applyTheme()
    }
  }

  return { isDark, toggle, init }
}
