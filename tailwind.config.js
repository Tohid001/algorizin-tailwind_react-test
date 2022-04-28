module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
    screens: {
      mobile: "390px",

      tab: "800px",

      large: "1440px",
    },
  },
  plugins: [],
};
