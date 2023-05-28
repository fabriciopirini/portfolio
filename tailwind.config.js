/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        primary: {
          DEFAULT: 'var(--color-text-primary)',
        },
        accent: {
          DEFAULT: 'var(--color-text-accent)',
        }
      },
      backgroundColor: {
        primary: {
          DEFAULT: 'var(--color-bg-primary)',
        },
        secondary: {
          DEFAULT: 'var(--color-bg-secondary)',
          hover: 'var(--color-bg-secondary-hover)',
        },
      }
    },
  },
  plugins: [],
}
