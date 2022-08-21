/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        main: "#413b89",
        secondary: "#f2e7dd",
        btn: "#c3a792",
        btnHover: "#98755b",
      },
    },
  },
  plugins: [],
};
