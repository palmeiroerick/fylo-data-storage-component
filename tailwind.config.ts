import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.tsx", "./app/**/*.tsx"],

  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      paleBlue: "hsl(243, 100%, 93%)",
      grayishBlue: "hsl(229, 7%, 55%)",
      darkBlue: "hsl(228, 56%, 26%)",
      veryDarkBlue: "hsl(229, 57%, 11%)",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    backgroundImage: {
      mobile: "url('/bg-mobile.png')",
      desktop: "url('/bg-desktop.png')",
      gradient:
        "linear-gradient(to right, hsl(6, 100%, 80%), hsl(335, 100%, 65%))",
    },
  },
};

export default config;
