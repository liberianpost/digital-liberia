import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      },
      // Fix for Fast Refresh issues
      fastRefresh: true,
      // Ensure JSX runtime is properly configured
      jsxRuntime: 'automatic'
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      // Simplified alias configuration
      ...['utils', 'config', 'hooks', 'pages'].map(dir => ({
        find: `@${dir}`,
        replacement: path.resolve(__dirname, `src/${dir}`)
      }))
    ],
    extensions: ['.js', '.jsx', '.json', '.mjs']
  },
  server: {
    port: 3005,
    host: true,
    strictPort: true,
    // Added headers to fix common CORS issues
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    proxy: {
      '/api': {
        target: 'https://libpayapp.liberianpost.com:8081',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    // Enable HMR fixes
    hmr: {
      overlay: false
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: 'hidden',
    // Critical for chunk loading
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    },
    // Fix for CSS modules
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    }
  },
  // Critical base configuration
  base: './',
  // Environment handling
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV || 'development')
  },
  // Optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material'
    ],
    esbuildOptions: {
      // Node.js global for browser
      define: {
        global: 'globalThis'
      }
    }
  }
});
