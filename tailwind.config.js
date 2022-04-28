module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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
    },
    screens: {
      mobile: "390px",

      tab: "800px",

      large: "1440px",
    },
  },
  plugins: [],
};
