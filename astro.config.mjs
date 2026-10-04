import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://dev.butadpj.com",
  // Keep the existing spacing between inline elements after the Astro 7 upgrade.
  compressHTML: true,
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  },
  integrations: [
    solidJs({
      devtools: true,
    }),
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
