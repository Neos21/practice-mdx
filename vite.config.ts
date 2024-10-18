import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    mdx({ jsxImportSource: 'solid-js/h' }),
    solid()
  ],
  base: './',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
});
