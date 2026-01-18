/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#A7C957', // pastel green
        secondary: '#F7EDE2',
        accent: '#FAD4D4',
        dark: '#3A2E39',
      },
    },
  },
  plugins: [],
};