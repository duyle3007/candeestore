/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#ee1b24",
    },
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["28px", "32px"],
      xl: ["34px", "38px"],
    },
    extend: {
      colors: {
        white: "#fff",
        gray: "#DEDED2",
        green: "#006432",
        cyan: "#01B6D3",
        black: "#000",
        red: "#fa442f",
        blue: "#2447d4",
      },
    },
  },
  plugins: [],
};
