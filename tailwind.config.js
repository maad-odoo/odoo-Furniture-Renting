/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        furnitureBrown: '#74532c',
        furnitureLight: '#f4ebda',
      },
    },
  },
  plugins: [],
}