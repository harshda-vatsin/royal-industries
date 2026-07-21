/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0B3A6E',
          'blue-dark': '#072B52',
          'blue-light': '#1769AA',
          interactive: '#38BDF8',
          'soft-bg': '#E1EDFA',
          'blue-grey': '#5F7488',
          navy: '#14212B',
          green: '#00704A',
          'green-dark': '#00593B',
        },
        charcoal: {
          DEFAULT: '#17212B',
          light: '#5F7488',
          dark: '#14212B',
        },
        lightgrey: {
          DEFAULT: '#D5E6F7',
          light: '#E1EDFA',
          dark: '#C4DBF5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
