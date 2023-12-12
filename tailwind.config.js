/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005403',
        secondary: '#ecffed',
        active: '#FFA300',
        third: '#C6EFFF',
        bluey: '#E9EFFF'
      }
    },
  },
  plugins: [],
}

