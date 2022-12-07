/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'homepage': '0 15px 15px rgba(255,236,239,0.5)'
      }
    },
    fontFamily: {
      "marckScript": ["Marck Script"],
      "petitFormalScript": ["Petit Formal Script"],
    }
  },
  plugins: [],
}
