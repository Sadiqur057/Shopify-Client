
/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#143b91',
        'secondary': '#235ee9',
        'dark': "#1e293b ",
        'darker': "#0f172a ",
        'text': '#706f6f',
      }
    },
  },
  plugins: [],
})
