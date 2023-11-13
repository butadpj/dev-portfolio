/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#5081ff",
        primaryFade: "#5283ff26",
        primaryLight: "#7683a5",
        primaryLightFade: "#7683a526",
        primaryDark: "#144ad6",

        accent: "#ee6807",
        accent2: "#c4ff5e",
        accentFade: "#ee68071a",

        dark: "#121213",
        darkFade: "#121213cc",
        light: "#f2f2f2",

        background: "#eef3ff",
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
