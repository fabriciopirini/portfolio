import { Contrast } from 'lucide-react'

/**
 * The one script `/` and `/resume` run: pages/_document.tsx inlines it in <head>, so a stored choice lands on
 * <html data-theme> before the first paint. Without a choice the CSS follows the system. It also wires the
 * toggle below, and reloads the choice when the page returns from the back/forward cache or a prerender.
 */
export const themeScript = `(() => {
  const root = document.documentElement
  const system = matchMedia('(prefers-color-scheme: dark)')
  // Mirrors the CSS: dark when picked, or when the system is dark and light was not picked.
  const sync = () => {
    const theme = root.dataset.theme
    document.querySelector('.theme')?.setAttribute('aria-pressed', theme === 'dark' || (theme !== 'light' && system.matches))
  }
  const load = () => {
    try {
      const theme = localStorage.getItem('theme')
      theme ? (root.dataset.theme = theme) : delete root.dataset.theme
    } catch {}
    sync()
  }
  load()
  addEventListener('pageshow', load)
  document.addEventListener('prerenderingchange', load)
  document.addEventListener('DOMContentLoaded', sync)
  system.addEventListener('change', sync)
  document.addEventListener('click', (event) => {
    const button = event.target.closest('.theme')
    if (!button) return
    root.dataset.theme = button.getAttribute('aria-pressed') === 'true' ? 'light' : 'dark'
    try {
      localStorage.setItem('theme', root.dataset.theme)
    } catch {}
    sync()
  })
})()`

/** Pressed means dark. The inline script sets the real state before anyone can reach the button. */
export const ThemeToggle = () => (
  <button type="button" className="theme" aria-label="Dark theme" aria-pressed="false">
    <Contrast aria-hidden size={18} />
  </button>
)
