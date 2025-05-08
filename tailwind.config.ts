import { type Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./app/components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: {
          DEFAULT: "#0a1f44",
          50: "#e6eaf2",
          100: "#c2cce0",
          200: "#9baecd",
          300: "#748fbb",
          400: "#4e71a8",
          500: "#34578e",
          600: "#27426e",
          700: "#1b2e4d",
          800: "#0f1a2d",
          900: "#04060e",
        },
        sweetBlue: {
          DEFAULT: "#4da6ff",
          50: "#e6f3ff",
          100: "#cce7ff",
          200: "#99d0ff",
          300: "#66b8ff",
          400: "#33a1ff",
          500: "#4da6ff", // base
          600: "#1a8cff",
          700: "#0072e6",
          800: "#005bb3",
          900: "#004480",
        },
      },
    },
  },
  plugins: [],
};

export default config;
