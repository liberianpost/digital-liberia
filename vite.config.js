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
      },
      // Add these external dependencies configuration
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        'axios' // Explicitly include axios
      ],
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  // Add this optimizeDeps configuration
  optimizeDeps: {
    include: [
      'axios',
      'react',
      'react-dom',
      'react-router-dom'
    ],
    exclude: [],
  },
});
