/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          50: '#fdf2f4',
          100: '#fce7ea',
          200: '#f9d2d8',
          300: '#f4b1bb',
          400: '#ec8494',
          500: '#e05871',
          600: '#cc3654',
          700: '#ad2444',
          800: '#8f203d',
          900: '#791e39',
        },
      },
    },
  },
  plugins: [],
};