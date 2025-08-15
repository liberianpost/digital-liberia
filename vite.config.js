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
          ['@emotion', { autoLabel: 'dev-only', sourceMap: true }],
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
      '@config': path.resolve(__dirname, 'src/config'),
    },
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
    exclude: [],
  },
  build: {
    sourcemap: true,
    minify: 'esbuild',
    target: 'esnext',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('react') ||
              id.includes('react-dom') ||
              id.includes('react-router-dom')
            ) {
              return 'vendor-react';
            }
            if (id.includes('@mui') || id.includes('emotion')) {
              return 'vendor-mui-emotion'; // Group MUI and Emotion together
            }
            return 'vendor';
          }
          if (id.includes('src/config')) return 'config';
          if (id.includes('src/utils')) return 'utils';
        },
      },
    },
    chunkSizeWarningLimit: 1600,
  },
  server: {
    port: 3005,
    strictPort: false,
    host: '0.0.0.0',
    open: false,
    hmr: {
      overlay: true,
      clientPort: 3005,
    },
    fs: {
      strict: false,
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material',
    ],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  define: {
    'process.env': {},
  },
  clearScreen: true,
  logLevel: 'info',
});
