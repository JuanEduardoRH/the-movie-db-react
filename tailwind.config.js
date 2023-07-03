/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          DEFAULT: "#0F172A",
          50: "#DDE4F3",
          100: "#BBC8E7",
          200: "#7892CF",
          300: "#3F61B1",
          400: "#273C6D",
          500: "#0F172A",
          600: "#0C1322",
          700: "#090E1A",
          800: "#05080F",
          900: "#030408",
          950: "#010204"
        }
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}

