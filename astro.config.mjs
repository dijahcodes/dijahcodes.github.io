// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // 1. Add your GitHub Pages URL (Required)
  site: 'https://dijahcodes.github.io', 
  
  // 2. Add your repo name with a leading slash (Required for project pages)
  // Skip this if your repo is named exactly '<your-username>.github.io'
  base: '/dijahcodes.github.io>', 

  vite: {
    plugins: [tailwindcss()],
  }
});
