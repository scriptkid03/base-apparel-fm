import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-desktop": "url('/images/hero-desktop.jpg')",
        "hero-mobile": "url('/images/hero-mobile.jpg')",
        "desktop-pattern": "url('/svgs/bg-pattern-desktop.svg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-135": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
      colors: {
        grayishRed: "hsl(0, 6%, 24%)",
        softRed: "hsl(0, 93%, 68%)",
        desaturatedRed: "hsl(0, 36%, 70%)",
        lightRed: "hsl(0, 80%, 86%)",
        roseRed: "hsl(0, 74%, 74%)",
        hoverLightRed: "hsl(0, 36%, 90%)",
        hoverRoseRed: "hsl(0, 100%, 74%)",
      }
    },
  },
  plugins: [],
};
export default config;
