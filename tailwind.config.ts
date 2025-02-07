import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C778DD",
        gray: "#ABB2BF",
        background: "#282C33",
        white: "#FFFFFF",
        black: "#1E1E1E"
      },
      screens: {
        "xl-1440": '1440px'
      }
    },
  },
  plugins: [],
} satisfies Config;
