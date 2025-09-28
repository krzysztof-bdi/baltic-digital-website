/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: {
          light: "#6C63FF",
          DEFAULT: "#4B46E6",
          dark: "#3A37B8",
        },
      },
      transitionProperty: {
        height: "height",
        opacity: "opacity",
        transform: "transform",
      },
    },
  },
  plugins: [],
};
