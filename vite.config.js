import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      // Simplified Babel config, as Vite handles most transformations
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
    },
  },
  esbuild: {
    // Streamlined esbuild config for JSX/TSX
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
    exclude: [],
  },
  build: {
    // Enable source maps for better debugging in production
    sourcemap: true,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          // Optimize vendor chunk to include key dependencies
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1600,
    // Ensure minification doesn't obscure errors
    minify: 'esbuild',
    target: 'esnext',
  },
  server: {
    port: 3001,
    strictPort: true,
    open: false,
    host: '0.0.0.0', // Expose to all interfaces
    hmr: {
      overlay: true, // Show full-screen error overlay
      clientPort: 3001,
    },
    fs: {
      strict: false, // Allow serving files outside root if needed
    },
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
    ],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  define: {
    'process.env': {}, // Avoid process.env issues
  },
  // Clear terminal for cleaner error output
  clearScreen: true,
});
