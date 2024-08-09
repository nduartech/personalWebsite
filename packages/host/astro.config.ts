import qwik from '@qwikdev/astro';
import { defineConfig } from 'astro/config';
// import node from "@astrojs/node";
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  // output: 'static',
  output: "hybrid",
  adapter: netlify(),
  experimental: {
    serverIslands: true
  },
  devToolbar: {
    enabled: false
  },
  site: 'https://nathanld.xyz',
  prefetch: {
    prefetchAll: true
  },
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // }),
  integrations: [sentry({
    dsn: "https://b3e71133ff7ca12d03de6f854827b87a@o4507745069301760.ingest.us.sentry.io/4507745077559296",
    sourceMapsUploadOptions: {
      project: 'nathanld-xyz',
      authToken: process.env.SENTRY_AUTH_TOKEN
    }
  }),
    qwik({
    include: '**/qwik/*'
  }), tailwind({
    applyBaseStyles: false
  }), svelte({
    include: '**/svelte/*'
  }), solidJs({
    include: '**/solid/*'
  }), {
    name: 'importmap-externals',
    hooks: {
      'astro:build:setup': ({
        vite,
        target
      }) => {
        if (target === 'client') {
          if (vite.build?.rollupOptions) {
            vite.build.rollupOptions.external = ['software-eng', 'interests', 'solid-js'];
          }
        }
      }
    }
  }, mdx(), sitemap(), robotsTxt(), compressor()]
});
