import tailwindTypography from '@tailwindcss/typography'
import tailwindContainerQueries from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import tailwindAnimate from 'tailwindcss-animate'
import tailwindDebugScreens from 'tailwindcss-debug-screens'
import plugin from 'tailwindcss/plugin'

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'

const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme('colors'))
  // Adds '--' to all color names and sets them as CSS variables
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]))

  addBase({
    ':root': newVars,
  })
}

export const config = {
  darkMode: ['class'],
  content: ['./components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './content/**/*.mdx'],
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
          DEFAULT: 'hsl(var(--color-text-primary))',
          background: 'hsl(var(--color-bg-primary))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-text-accent))',
        },
      },
      borderColor: {
        accent: {
          DEFAULT: 'hsl(var(--color-text-accent))',
        },
        'shop-card': 'hsl(var(--shop-card-border-color) / <alpha-value>)',
      },
      backgroundColor: {
        primary: {
          DEFAULT: 'hsl(var(--color-bg-primary))',
          hero: 'hsl(var(--color-bg-primary-hero))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-bg-secondary))',
          hover: 'hsl(var(--color-bg-secondary-hover))',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-text-accent))',
        },
        'skill-card': {
          DEFAULT: 'hsl(var(--color-bg-skill-card))',
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
      height: {
        'full-with-shop-nav': 'calc(100svh - var(--nav-height-shop))',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: '0.2' },
          '20%': { opacity: '1' },
          '100% ': { opacity: '0.2' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        'carousel-mobile': 'marquee 20s linear infinite',
        blink: 'blink 1.4s both infinite',
      },
    },
  },
  plugins: [
    tailwindContainerQueries,
    tailwindDebugScreens,
    tailwindAnimate,
    tailwindTypography,
    addVariablesForColors,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            }
          },
        },
        {
          values: theme('transitionDelay'),
        }
      )
    }),
  ],
} satisfies Config

export default config
