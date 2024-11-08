/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // main colors
        primaryColor: "#6C6CE5",
        primaryColorHover: "#5252ff",
        primaryColorLight: "#a28fff",
        primaryColorDark: "#a28fff",
        secondaryColor: "#4C516D",
        tertiaryColor: "#1A1A2E",

        // text colors
        textColor: "234324",
        textColorLight: "",

        // layout colors
        bodyColor: "#E0E0FF",
        bodyColorDark: "",
        containerColor: "#fff",
        containerColorDark: "#fff",
      },
    },
    screens: {
      xs: "378px",
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}

