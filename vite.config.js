import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@context': path.resolve(__dirname, 'src/context')
    },
    extensions: ['.js', '.jsx'] // Prioritize these extensions
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Apply to both .js and .jsx files
    exclude: [],
    jsx: 'automatic'
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    port: 3000
  }
});
