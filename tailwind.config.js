/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'play': ['Playfair Display', 'serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        'brow': '#5E5556',
        'dark-rose':'#E38898',
        'light-rose':'#DEC8CB',
        'bonina':'#61373E',
      },
    },
  },
  plugins: [],
}
