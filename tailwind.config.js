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
        "nocta-1": "#010409",  // near-black background
        "nocta-2": "#0A1128",  // deep navy
        "nocta-3": "#15803D",  // darker green accent
        "nocta-4": "#10B981",  // bright green accent
        "nocta-5": "#102A43",  // another dark navy
        "nocta-6": "#F1F5F9",  // near-white (for text)
        "nocta-7": "#0891B2",  // teal accent
      
        "berry-1": "#081828",  // deep blue-teal
        "berry-2": "#0B2532",  // darker teal
        "berry-3": "#059669",  // medium green-teal
        "berry-4": "#34D399"   // bright minty-green accent
      },},
    },
  plugins: [],
}
