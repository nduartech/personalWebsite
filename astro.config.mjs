import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
// @ts-check
import { defineConfig, envField } from 'astro/config'
import Icons from 'unplugin-icons/vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://nathanld.xyz',
  output: 'static',
  outDir: './dist',
  integrations: [
    svelte(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap()
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
