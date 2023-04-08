/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
        Lobster:["Lobster","cursive"],
        Bebas:["Bebas Neue","cursive"],
        Nunito:['Nunito Sans',"sans-serif"]
       },
    },
  },
  plugins: [],
}