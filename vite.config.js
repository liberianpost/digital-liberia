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
              cssPropOptimization: true
            }
          ]
        ]
      },
      fastRefresh: true,
      jsxRuntime: 'automatic'
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
      { find: '@config', replacement: path.resolve(__dirname, 'src/config') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') }
    ],
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  server: {
    port: 3005,
    host: true,
    strictPort: true,
    open: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp'
    },
    proxy: {
      '/api': {
        target: 'https://libpayapp.liberianpost.com:8081',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        ws: true
      }
    },
    hmr: {
      overlay: false,
      clientPort: 3005
    }
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'terser',
    assetsDir: 'assets',
    manifest: true,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@mui') || id.includes('@emotion')) {
              return 'vendor-mui';
            }
            return 'vendor';
          }
        }
      }
    }
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('postcss-combine-media-query'),
        require('postcss-combine-duplicated-selectors')({
          removeDuplicatedProperties: true
        })
      ]
    },
    modules: {
      generateScopedName: '[name]__[local]___[hash:base64:5]',
      localsConvention: 'camelCaseOnly'
    }
  },
  base: './',
  define: {
    'process.env': process.env,
    'import.meta.env.MODE': JSON.stringify(process.env.NODE_ENV || 'development'),
    'import.meta.env.PROD': JSON.stringify(process.env.NODE_ENV === 'production'),
    'import.meta.env.DEV': JSON.stringify(process.env.NODE_ENV !== 'production')
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@emotion/react',
      '@emotion/styled',
      '@mui/material',
      '@mui/icons-material'
    ],
    exclude: ['js-big-decimal'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      },
      plugins: [
        {
          name: 'fix-emotion-react',
          setup(build) {
            build.onResolve({ filter: /@emotion\/react\/jsx-runtime/ }, () => {
              return { path: require.resolve('@emotion/react/jsx-runtime') };
            });
          }
        }
      ]
    }
  }
});
