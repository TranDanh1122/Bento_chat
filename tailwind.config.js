/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        mb: { min: "0", max: "767px" },
        tb: { min: "768px", max: "1023px" }

      }
    },
  },
  plugins: [],
}

