import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }],
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@context': path.resolve(__dirname, 'src/context'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@config': path.resolve(__dirname, 'src/config'), // Ensure @config alias
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
    exclude: [],
  },
  build: {
    sourcemap: true, // Enable source maps for debugging
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
          // Ensure config files are bundled
          if (id.includes('src/config')) {
            return 'config';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1600,
    minify: 'esbuild',
    target: 'esnext',
  },
  server: {
    port: 3001,
    strictPort: true,
    open: false,
    host: '0.0.0.0',
    hmr: {
      overlay: true,
      clientPort: 3001,
    },
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  define: {
    'process.env': {},
  },
  clearScreen: true,
});
