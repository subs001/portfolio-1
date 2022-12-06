/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'homepage': '0 35px 35px rgba(76,28,28,1)'
      }
    },
    fontFamily: {
      "marckScript": ["Marck Script"],
    }
  },
  plugins: [],
}
