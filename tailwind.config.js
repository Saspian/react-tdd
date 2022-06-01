module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: "#5762E5",
          light: "#7cbb4414"
        },
        'secondary': {
          DEFAULT: "#FFD600",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}