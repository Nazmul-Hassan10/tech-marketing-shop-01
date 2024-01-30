/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackground: "#090b17",
        subBackground: "#3d4555",
        navbar: "#f3fcfb",
        primaryText: "#99a8ac",
        secondaryText: "#ebf7ff",
        primaryBtn: "#25ffe7",
        secondaryBtn: "#fd824a",
        scroll: "#3bf5fb",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-main-background-gradient': {
          backgroundImage: 'linear-gradient(90deg, rgba(9,11,23,1) 0%, rgba(35,40,54,1) 73%, rgba(61,69,85,1) 100%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
