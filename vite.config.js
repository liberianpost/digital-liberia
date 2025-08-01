import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  esbuild: {
    loader: 'jsx', // 👈 This line treats .js files as if they contain JSX
    include: /src\/.*\.js$/, // 👈 Only apply to .js files in src/
    exclude: [],             // 👈 Optional: exclude nothing
  },
  server: {
    port: 3000,
    open: true,
  }
});
