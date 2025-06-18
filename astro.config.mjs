// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import catppuccin from "@catppuccin/tailwindcss";

// https://astro.build/config
export default defineConfig({
    vite: {    
    plugins: [tailwindcss()],
  },

});
  