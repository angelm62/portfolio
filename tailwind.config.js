/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm:"640px",
      md:"768px",
      lg:"960px",
      xl:"1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      colors:{
        primary: '#17181D',
        accent: {
          DEFAULT: "#007acc",
          hover: "#0098ff"
        },

      },
      /**   colors:{
        primary: '#1f1f1f',
        accent: {
          DEFAULT: "#00ff99",
          hover: "#00e187"
        }, */
      /** primary: '#1c1c22'
       *            #9cdcff,
        accent: {
          DEFAULT: "#00ff99"
                    #9cdcff,
          hover: "#00e187" */

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}