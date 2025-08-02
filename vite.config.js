import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // Recommended for React 18+
      jsxImportSource: 'react',
      include: ['**/*.{jsx,tsx}', '**/*.js'], // Include both JSX and JS files
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', {
            runtime: 'automatic'
          }]
        ]
      }
    })
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
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'] // All supported extensions
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx' // Treat .js files as JSX
      },
      plugins: [
        {
          name: 'react-jsx',
          setup(build) {
            build.onLoad({ filter: /\.(js|jsx)$/ }, async (args) => {
              return {
                loader: 'jsx',
                contents: (await fs.promises.readFile(args.path)).toString()
              };
            });
          }
        }
      ]
    }
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    jsx: 'automatic',
    jsxDev: false,
    jsxImportSource: 'react',
    loader: 'jsx',
    include: /src\/.*\.(jsx?|tsx?)$/,
    exclude: [],
    keepNames: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      strict: true,
      allow: ['..']
    },
    hmr: {
      overlay: true
    }
  }
});
