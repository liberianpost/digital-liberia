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
      '@context': path.resolve(__dirname, 'src/context'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
    exclude: [],
    jsx: 'automatic'
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 3001,
    strictPort: true,
    open: false,
    host: '0.0.0.0',       // Expose to all interfaces
    hmr: {
      overlay: true,       // Show full errors in browser
      clientPort: 3001     // Ensure HMR connects to correct port
    },
    fs: {
      strict: false        // Allow serving files outside root if needed
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom'
    ],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  define: {
    'process.env': {}        // Avoid process.env issues in React
  },
  clearScreen: true          // Clears terminal to show latest errors
});
