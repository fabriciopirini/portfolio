/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
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
        },
        secondary: {
          DEFAULT: 'var(--color-bg-secondary)',
          hover: 'var(--color-bg-secondary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-text-accent)',
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
  plugins: [require('tailwindcss-debug-screens'), require('tailwindcss-animate')],
}
