import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
    vitePluginSingleSpa({
      type: 'root',
      imo: true,
      importMaps: {
        type: 'overridable-importmap',
        dev: './importsMap.dev.json',
        build: "./importsMap.prod.json",
      }
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 7300,
    open: false,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ["landing","software-eng"],
      output: {
        format: "esm",
      },
    },
  }

});
