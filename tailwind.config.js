/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcf3a",
        secondary: "#0063ff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      backgroundSize: {
        '200%': '200%',
      },
      animation: {
        'gradient-move': 'bg-animation 2s linear infinite',
      },
      keyframes: {
        'bg-animation': {
          '0%': { 'background-position': '0%' },
          '100%': { 'background-position': '100%' },
        },
      },
    },
  },
  plugins: [],
};
