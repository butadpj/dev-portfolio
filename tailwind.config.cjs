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
        openSans: ["Open Sans", "sans-serif"],
      },
      width: {
        "180%": "180%",
      },
      height: {
        "80%": "80%",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: "0", transform: "translateY(-2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: "0", transform: "translateX(2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: "0", transform: "translateY(2px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: "0", transform: "translateX(-2px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),

    // default prefix is "ui"
    require("@kobalte/tailwindcss"),

    // or with a custom prefix:
    require("@kobalte/tailwindcss")({ prefix: "kb" }),
  ],
};
