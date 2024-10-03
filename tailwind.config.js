/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: ["Roboto", "sans-serif"],
        manage: ["Ubuntu", "sans-serif"],
        popin: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"]
      }
    },
  },
  plugins: [],
}