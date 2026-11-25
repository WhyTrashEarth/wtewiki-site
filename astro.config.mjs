import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { pageDates, normalizePath } from "./src/data/page-dates.mjs";

export default defineConfig({
  site: 'https://wte.wiki',
  trailingSlash: 'always',
  integrations: [sitemap({
    serialize(item) {
      const date = pageDates[normalizePath(new URL(item.url).pathname)];
      return date ? { ...item, lastmod: date } : item;
    }
  })],

  // i18n routing ready:
  i18n: {
    defaultLocale: "en",
    locales: ["en"],

    // IMPORTANT: do not prefix default locale
    routing: {
      prefixDefaultLocale: false
    }
  },

});