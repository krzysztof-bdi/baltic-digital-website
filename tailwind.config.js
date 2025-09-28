/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'baltic-navy': '#0A192F',
        'dark-steel': '#1F2937',
        'cyber-turq': '#00F6D2',
        'steel-gray': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Geist Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
