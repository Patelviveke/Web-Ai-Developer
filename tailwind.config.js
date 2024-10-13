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
        Montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        custom: '0px 25.62px 51.23px 0px rgba(59, 130, 246, 0.25)',
      },
    },
  },
  plugins: [],
}