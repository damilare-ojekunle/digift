/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        mainBlue: "#0057DB",
        lightBlue: "#C2DDFF",
        textColor: "#8A91A8",
        lighterBlue: "#F3F4F7",
        bluish: " #5CA5FF",
      },
      fontFamily: {
        sans: ["Poly", "sans-serif"],
      },
    },
  },
  plugins: [],
};