import tailwindContainerQueries from '@tailwindcss/container-queries'
import type { Config } from 'tailwindcss'
import tailwindAnimate from '@anuragroy/tailwindcss-animate'
import tailwindDebugScreens from 'tailwindcss-debug-screens'
import tailwindTouch from 'tailwindcss-touch'
import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import { mapKeys } from 'lodash-es'

import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette'
import cornerShapePlugin from 'tailwindcss-corner-shape'

const addVariablesForColors = ({ addBase, theme }: any) => {
  const allColors = flattenColorPalette(theme('colors'))
  // Adds '--' to all color names and sets them as CSS variables
  const newVars = mapKeys(allColors, (val, key) => `--${key}`)

  addBase({
    ':root': newVars,
  })
}

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
      fontFamily: {
        inter: ['var(--font-inter)'],
        leagueSpartan: ['var(--font-league-spartan)'],
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
        'source-sans-3': ['var(--font-source-sans-3)'],
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
          DEFAULT: 'hsl(var(--color-text-muted-foreground))',
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
        popover: {
          DEFAULT: 'white',
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
      transitionTimingFunction: {
        'in-quad': 'var(--ease-in-quad)',
        'in-cubic': 'var(--ease-in-cubic)',
        'in-quart': 'var(--ease-in-quart)',
        'in-quint': 'var(--ease-in-quint)',
        'in-expo': 'var(--ease-in-expo)',
        'in-circ': 'var(--ease-in-circ)',
        'out-quad': 'var(--ease-out-quad)',
        'out-cubic': 'var(--ease-out-cubic)',
        'out-quart': 'var(--ease-out-quart)',
        'out-quint': 'var(--ease-out-quint)',
        'out-expo': 'var(--ease-out-expo)',
        'out-circ': 'var(--ease-out-circ)',
        'in-out-quad': 'var(--ease-in-out-quad)',
        'in-out-cubic': 'var(--ease-in-out-cubic)',
        'in-out-quart': 'var(--ease-in-out-quart)',
        'in-out-quint': 'var(--ease-in-out-quint)',
        'in-out-expo': 'var(--ease-in-out-expo)',
        'in-out-circ': 'var(--ease-in-out-circ)',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
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
        coinIncrease: {
          '0%': { transform: 'translateX(-100%)' }, // Start from the left
          // '30%': { transform: 'translateX(0%)' }, // Quickly move to fully visible
          // '70%': { transform: 'translateX(0%)' }, // Stay in place
          '100%': { transform: 'translateX(100%)' }, // Exit to the right
        },
        scaleIn: {
          from: {
            opacity: '0',
            transform: 'scale(0)',
          },
          to: {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        sideMe: 'sideMe 1.2s ease-in-out',
        sideMeReturn: 'sideMeReturn 1.2s ease-in-out',
        scaleConversationBubble: 'scaleConversationBubble .5s ease-in-out',
        scaleConversationBubbleReturn: 'scaleConversationBubbleReturn .3s ease-in-out',
        appearDownAndFade: 'appearDownAndFade 3.5s ease-in-out',
        coinIncrease: 'coinIncrease 2s ease-out',
        scaleIn: 'scaleIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
  	cornerShapePlugin({ default: 'squircle' }),
    tailwindContainerQueries,
    tailwindDebugScreens,
    tailwindAnimate,
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
