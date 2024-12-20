/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#7A7A7A',
        'secondary-light': '#D9D9D9',
        'primary-dark': '#262B43',
        'secondary-dark': '#313651',
        'accent-color': '#62929A',
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
    }
    },
  },
  plugins: [],
}
