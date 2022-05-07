module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobileRange: { max: "799.98px" },
      tabRange: { min: "800px", max: "1439.98px" },
      fromTab: "800px",

      fromLarge: "1440px",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#00C614",
        "primary-1": " #EFFBF0",
        error: "#F52828",
        "error-1": "#FBEFF0",
        warning: "#F58A28",
        "warning-1": "#FDF4ED",
        "warning-6": "#F58829",
        "warning-7": "#E3920F",
        neutral: "#6B6C72",
        "neutral-1": "#F9F9FA",
        "neutral-2": "#E5E5E6",
        "neutral-2-bg": "#F2F2F3",
        "neutral-3": "#D2D2D5",
        "neutral-5": "#B2B2B6",
        "neutral-7": "#6B6C72",
        "neutral-8": "#88898E",
        "neutral-9": "#3E3F48",
        success: "#44C776",
        "success-1": "#F1FDF6",
        "success-2": "#E8F7EE",
        "success-3": "#82DDA5",
      },
      boxShadow: {
        menuActive:
          "0px 3px 1px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
        navContainer: "0px -4px 2px rgba(0, 0, 0, 0.09)",
        dashCard:
          "0px 5px 4px rgba(20, 40, 82, 0.08), 0px 24px 24px rgba(20, 40, 82, 0.04)",
        paginate: "0px 3px 5px rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
