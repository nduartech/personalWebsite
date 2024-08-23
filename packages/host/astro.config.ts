import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import svelte from '@astrojs/svelte'
// import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind'
import qwik from '@qwikdev/astro'
import compressor from 'astro-compressor'
import robotsTxt from 'astro-robots-txt'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  // output: 'static',
  output: 'hybrid',
  adapter: netlify(),
  experimental: {
    serverIslands: true,
  },
  devToolbar: {
    enabled: false,
  },
  site: 'https://nathanld.xyz',
  prefetch: {
    prefetchAll: true,
  },
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  integrations: [
    qwik({
      include: '**/qwik/*',
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    svelte({
      include: '**/svelte/*',
    }),
    solidJs({
      include: '**/solid/*',
    }),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if (target === 'client') {
            if (vite.build?.rollupOptions) {
              vite.build.rollupOptions.external = [
                'software-eng',
                'interests',
                'solid-js',
              ]
            }
          }
        },
      },
    },
    mdx(),
    sitemap(),
    robotsTxt(),
    compressor(),
  ],
})
