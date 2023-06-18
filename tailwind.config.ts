import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindDebugScreens from 'tailwindcss-debug-screens'

export const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      textColor: {
        primary: {
          DEFAULT: 'var(--color-text-primary)',
          background: 'var(--color-bg-primary)',
        },
        accent: {
          DEFAULT: 'var(--color-text-accent)',
        },
      },
      borderColor: {
        accent: {
          DEFAULT: 'var(--color-text-accent)',
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: 'var(--color-bg-primary)',
          hero: 'var(--color-bg-primary-hero)',
        },
        secondary: {
          DEFAULT: 'var(--color-bg-secondary)',
          hover: 'var(--color-bg-secondary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-text-accent)',
        },
        'skill-card': {
          DEFAULT: 'var(--color-bg-skill-card)',
        },
      },
      colors: {
        linkedIn: {
          DEFAULT: 'rgb(10, 102, 194)',
        },
      },
      minHeight: {
        comfortable: 'calc(max(100vh, 900px))',
      },
    },
  },
  plugins: [tailwindDebugScreens, tailwindAnimate],
} satisfies Config

export default config
