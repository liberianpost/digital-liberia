import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          [
            '@emotion/babel-plugin',
            {
              sourceMap: true,
              autoLabel: 'dev-only',
              labelFormat: '[local]',
            },
          ],
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@context',
        replacement: path.resolve(__dirname, 'src/context')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: '@config',
        replacement: path.resolve(__dirname, 'src/config')
      }
    ],
    extensions: ['.js', '.jsx', '.json']
  },
  optimizeDeps: {
    include: [
      '@emotion/react',
      '@emotion/styled',
      '@mui/material',
      '@mui/material/styles',
    ],
    exclude: ['js-big-decimal'],
  },
  define: {
    'process.env': {},
    'import.meta.env': JSON.stringify(process.env)
  },
  envPrefix: ['VITE_', 'REACT_APP_'],
  server: {
    port: 3005,
    host: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'https://libpayapp.liberianpost.com:8081',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@emotion/react', '@emotion/styled'],
          auth: ['@/context/AuthContext', '@/utils/auth'],
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  base: '/',
});
