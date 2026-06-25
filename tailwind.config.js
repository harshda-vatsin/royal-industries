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
          red: '#B5121B',
          'red-dark': '#8c0e14',
          'red-light': '#e01622',
        },
        charcoal: {
          DEFAULT: '#1E1E1E',
          light: '#333333',
          dark: '#121212',
        },
        lightgrey: {
          DEFAULT: '#F5F5F7',
          light: '#FAFAFB',
          dark: '#EBEBED',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
}
