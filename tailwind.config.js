/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          '50': '#f5f0ff',
          '100': '#eee4ff',
          '200': '#dfccff',
          '300': '#c8a4ff',
          '400': '#b070ff',
          '500': '#9c37ff',
          '600': '#970fff',
          '700': '#8c00ff',
          '800': '#7500da',
          '900': '#6600ba',
          '950': '#3b007a',
        },
      }
    },
  },
  plugins: [],
}