/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'marckScript': ["Marck Script"],
      'satisfy': ["Satisfy"],
      'poppins': ["Poppins"],
      'petitFormalScript': ["Petit Formal Script"],
      'dancingScript': ['Dancing Script'],
      'quicksand': ['Quicksand'],
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
