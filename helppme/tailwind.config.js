/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'], 
        roboto: ['Roboto', 'sans-serif'], 
      },
      colors: {
        primary: '#bfd7f3  ',
        secondary: '#0C356A',
        background: '#daebff ',
        text: '#023470',
        accent: '#032044',
        text2:'#213555'
      },
    },
  },
 
}
