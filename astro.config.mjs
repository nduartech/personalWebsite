import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
// import tailwind from '@astrojs/tailwind'
import tailwindcss from '@tailwindcss/vite';
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
    // tailwind({
    //   applyBaseStyles: false,
    // }),
    sitemap()
  ],

  vite: {
    plugins: [
      tailwindcss(),
      Icons({
        compiler: 'astro',
      }),
    ],
    server: {
      fs: {
        strict: false,
      },
    },
  }
})
