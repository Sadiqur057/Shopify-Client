/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#0f172a',
        'secondary': '#1e293b',
        'text': '#706f6f',
      }
    },
  },
  plugins: [],
}

