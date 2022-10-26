/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff7130",
        secondary: "#872b97",
        warning: "#e97316",
        error: "#ef444a",
        success: "#22c55e",
        white: "#ffffff",
        light: {
          100: "#ECF0FD",
          200: "#DDD8FF",
          300: "#B3B3B4",
          400: "#8d8e8e",
          500: "#676868",
          600: "#414243",
        },
        black: {
          300: "#414243",
          400: "#1b1c1d",
          500: "#171721",
          600: "#171718",
        },
      },
      fontSize: {
        xxs: "0.81rem",
        xs: "0.88rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.25rem",
        xl: "3rem",
        xxl: "4rem",
        extra: "1.25rem",
      },
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
      },
      fontWeight: {
        "extra-light": 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      boxShadow: {
        "custom-1":
          "-4px -4px 2px rgba(232, 232, 232, 0.25), 4px 4px 2px rgba(232, 232, 232, 0.25)",
        "custom-2":
          "0px -3.06122px 7.65306px 7.65306px rgba(0, 0, 0, 0.1), 0px 7.65306px 15.3061px 15.3061px rgba(0, 0, 0, 0.1)",
      },
      screens: {
        xs: "320px",
        // => @media (min-width: 0px) { ... }

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xlg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "2560px",
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
