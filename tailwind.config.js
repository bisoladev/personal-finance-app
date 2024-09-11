/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        beige100: "#F8F4F0",
        beige500: "#98908B",
        grey900: "#201F24",
        grey500: "#696868",
        grey300: "#B3B3B3",
        grey100: "#F2F2F2",
        colorGreen: "#277C78",
        colorYellow: "#F2CDAC",
        colorCyan: "#82C9D7",
        colorNavy: "#626070",
        colorRed: "#C94736",
        colorPurple: "#826CB0",
      },
      backgroundImage: {
        auth: "url('./src/assets/illustration-authentication.svg')",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};
