import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import deno from '@deno/astro-adapter'
// @ts-check
import { defineConfig, envField } from 'astro/config'
import Icons from 'unplugin-icons/vite'

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
