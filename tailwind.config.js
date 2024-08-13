/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'card': '0px 0px 10px 1px rgba(0, 0, 0, 0.75)',
        'button-green' : '0px 0px 12px 1px #c1d34a'
      }
    },
  },
  plugins: [],
}

