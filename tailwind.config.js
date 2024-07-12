/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primaryColor: {
          100: "#E6F4F4",
          200: "#BFE2E2",
          300: "#99D0D0",
          400: "#66B7B7",
          500: "#33A3A3",
          600: "#008080",
          700: "#007070",
          800: "#006060",
          900: "#005050",
        },
        secondaryColor: {
          100: "#FDEDEC",
          200: "#F9CBC7",
          300: "#F5A9A4",
          400: "#F08B81",
          500: "#F08080",
          600: "#DE5F5E",
          700: "#C74A49",
          800: "#AF3735",
          900: "#962622",
        },
        accentColor: {
          100: "#FFFFF0",
          200: "#FFFFE0",
          300: "#FFFFD0",
          400: "#FFFFC0",
          500: "#FFFFB0",
          600: "#FFFFA0",
          700: "#FFFF90",
          800: "#FFFF80",
          900: "#FFFF70",
        },
      },
    },
  },
  plugins: [],
};
