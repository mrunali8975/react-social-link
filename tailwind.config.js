/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors: {
        green: {
          custom: 'hsl(75, 94%, 57%)', // Custom green color
        },
        white: 'hsl(0, 0%, 100%)',     // White color
        grey: {
          700: 'hsl(0, 0%, 20%)',      // Grey 700
          800: 'hsl(0, 0%, 12%)',      // Grey 800
          900: 'hsl(0, 0%, 8%)',       // Grey 900
        },
      },
      fontFamily: {
        inter: ['"Inter"', 'inter'], // For Young Serif
      },
    },
  },
  plugins: [],
}