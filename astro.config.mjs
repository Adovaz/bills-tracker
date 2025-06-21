// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import catppuccin from "@catppuccin/tailwindcss";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  vite: {    
  plugins: [tailwindcss()],
},

  adapter: cloudflare(),
  site:'https://bills-tracker.adovaz.github.io',
  base: 'bills-tracker',
});