import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import deno from '@deno/astro-adapter'
// @ts-check
import { defineConfig, envField } from 'astro/config'
import Icons from 'unplugin-icons/vite'

import expressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  site: 'https://nathanld.xyz',
  output: 'server',
  outDir: './dist',
  adapter: deno(),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    expressiveCode({
      themes: ['tokyo-night', 'catppuccin-latte'], // If your site has a theme switcher that allows users to pick a theme, Expressive Code can generate CSS code to support it. By default, you can use the data-theme attribute to select a theme by name, both on the html element and individual code blocks.
    }),
  ],
  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
    server: {
      fs: {
        strict: false,
      },
    },
  },
})
