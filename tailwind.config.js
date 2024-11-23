/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gatorblue: {
          50: "#e5f3ff",
          100: "#cfe9ff",
          200: "#a9d4ff",
          300: "#75b5ff",
          400: "#3f83ff",
          500: "#1452ff",
          600: "#003bff",
          700: "#003cff",
          800: "#0036e3",
          900: "#0021a5",
          950: "#001166",
        },
        gatororange: "#FA4616",
        bronze: {
          50: "#f1e2d9",
          100: "#e5c5b1",
          200: "#daa886",
          300: "#d08a4f",
          400: "#b8722d",
          500: "#985e25",
          600: "#794b1d",
          700: "#5b3816",
          800: "#3f270f",
          900: "#251709",
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
};
