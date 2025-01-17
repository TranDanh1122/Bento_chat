/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      screens: {
        sm: { min: "0", max: "767px" },
        md: { min: "768px", max: "1023px" },
        lg: { min: "1024px", max: "1279px" },
        xl: { min: "1280px", max: "1439px" },
        xxl: { min: "1440px", max: "1600px" }

      },
      fontFamily: {
        rubik: "Rubik, sans-serif",
        inter: "Inter , sans-serif",
        host: "Host Grotesk, sans-serif"
      }
    },
  },
  plugins: [],
}

