/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",],
    theme: {
      extend: {colors: {
        "nocta-1": '#4D774E',
        "nocta-2": '#007CC7',
        "nocta-3": '#4DA8DA',
        "nocta-4": '#fba92c',
        "nocta-5": '#203647',
        "nocta-6": '#EEFBFB',
        "nocta-7": '#004E7C',
        "berry-1": '#37306B',
        "berry-2": '#66347F',
        "berry-3": '#9E4784',
        "berry-4": '#D27685',
      },},
    },
  plugins: [],
}
