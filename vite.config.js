import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') }
    ],
    extensions: ['.js', '.jsx']
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer]
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  base: './'
});
