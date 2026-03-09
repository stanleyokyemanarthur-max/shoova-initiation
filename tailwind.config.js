/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
     colors: {
    primary: "#2F4858",
    secondary: "#C46A3A",
    growth: "#2F9E44",
    sky: "#6B9FB3",
    background: "#F8FAFC",
    accent: "#fef3c7",

    textDark: "#0f172a",
    text: "#475569"
  },

       fontFamily: {
    heading: ["Playfair Display", "serif"],
    body: ["Playfair Display", "sans-serif"]
  }
    }
  },
  plugins: []
};