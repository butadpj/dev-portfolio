/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary))",
        primaryFade: "#5283ff26",
        primaryLight: "hsl(var(--primaryLight))",
        primaryLightFade: "#7683a526",
        primaryDark: "hsl(var(--primaryDark))",

        accent: "hsl(var(--accent))",
        accent2: "hsl(var(--accent2))",
        accentFade: "#ee68071a",

        dark: "hsl(var(--dark))",
        darkFade: "#121213cc",
        light: "hsl(var(--light))",
      },
      fontFamily: {
        mitr: ["Mitr", "sans-serif"],
        k2d: ["K2D", "sans-serif"],
      },
      width: {
        "180%": "180%",
      },
      height: {
        "80%": "80%",
      },
    },
  },
  plugins: [],
};
