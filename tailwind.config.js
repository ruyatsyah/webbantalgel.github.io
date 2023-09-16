/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        'negative': -1,
        'custom': 1000,
      },
    },
  },
  plugins: [ ],
}