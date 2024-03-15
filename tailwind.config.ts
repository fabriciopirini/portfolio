import tailwindTypography from '@tailwindcss/typography'
import tailwindContainerQueries from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import tailwindAnimate from '@anuragroy/tailwindcss-animate'
import tailwindDebugScreens from 'tailwindcss-debug-screens'
import tailwindTouch from 'tailwindcss-touch'
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
      fontFamily: {
        inter: ['var(--font-inter)'],
        leagueSpartan: ['var(--font-league-spartan)'],
      },
      textColor: {
        primary: {
          DEFAULT: 'hsl(var(--color-text-primary))',
          background: 'hsl(var(--color-bg-primary))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-text-secondary))',
        },
        muted: {
          foreground: 'hsl(var(--color-text-muted-foreground))',
        },
      },
      ringOffsetColor: {
        primary: 'hsl(var(--color-bg-primary))',
      },
      borderColor: {
        'shop-card': 'hsl(var(--color-shop-card-border) / <alpha-value>)',
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
        'skill-card': {
          DEFAULT: 'hsl(var(--color-bg-skill-card))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
      },
      colors: {
        linkedIn: {
          DEFAULT: 'rgb(10, 102, 194)',
        },
        accent: {
          DEFAULT: 'hsl(var(--color-text-accent))',
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
        sideMe: {
          '0%': { transform: 'translateX(-150%) rotate(0deg)' },
          '100%': { transform: 'translateX(-50%) rotate(40deg)' },
        },
        sideMeReturn: {
          '0%': { transform: 'translateX(-50%) rotate(40deg)' },
          '100%': { transform: 'translateX(-150%) rotate(0deg)' },
        },
        scaleConversationBubble: {
          '0%': { transform: 'scaleX(0) translateX(-65px)', opacity: '0' },
          '100%': { transform: 'scaleX(1) translateX(0px)', opacity: '1' },
        },
        scaleConversationBubbleReturn: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        appearDownAndFade: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '30%': { transform: 'translateY(0px)', opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        'carousel-mobile': 'marquee 20s linear infinite',
        blink: 'blink 1.4s both infinite',
        sideMe: 'sideMe 1.2s linear',
        sideMeReturn: 'sideMeReturn 1.2s linear',
        scaleConversationBubble: 'scaleConversationBubble .5s ease-in-out',
        scaleConversationBubbleReturn: 'scaleConversationBubbleReturn .3s ease-in-out',
        appearDownAndFade: 'appearDownAndFade 3.5s ease-in-out',
      },
    },
  },
  plugins: [
    tailwindContainerQueries,
    tailwindDebugScreens,
    tailwindAnimate,
    tailwindTypography,
    addVariablesForColors,
    tailwindTouch(),
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
