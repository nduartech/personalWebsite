import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import deno from '@deno/astro-adapter'
import Icons from 'unplugin-icons/vite'
// @ts-check
import { defineConfig } from 'astro/config'

import expressiveCode from 'astro-expressive-code'

const isPreview =
  process.argv.includes('preview') || process.env.PREVIEW === 'true'

// https://astro.build/config
export default defineConfig({
  site: 'https://nathanld.xyz',
  output: 'server',
  outDir: './dist',
  adapter: isPreview ? deno() : netlify(),
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    expressiveCode({
      themes: ['tokyo-night', 'catppuccin-latte'], // If your site has a theme switcher that allows users to pick a theme, Expressive Code can generate CSS code to support it. By default, you can use the data-theme attribute to select a theme by name, both on the html element and individual code blocks.
    }),
    mdx(),
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
