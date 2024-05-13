import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(),cssInjectedByJsPlugin({
    preRenderCSSCode: (cssCode) => cssCode
  })],
  base: "http://localhost:4173/",
  build: {
    assetsDir: "assets",
    target: 'esnext',
    rollupOptions: {
      input: "src/spa.ts",
      preserveEntrySignatures: "exports-only",
      external: ["svelte"],
      output: {
        entryFileNames: "bundle.js",
        format: "esm",
      },
    },
  }
})
