/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc', // Cambia esto a tu color principal
        secondary: '#ffed4a', // Cambia esto a tu color secundario
      },
    },
  },
  plugins: [],
};
