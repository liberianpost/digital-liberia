import '@emotion/react'; // Force Emotion initialization first
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AuthProvider } from '@context/AuthContext';
import App from './App';
import './index.css';

const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: false, // Disable speedy mode for debugging
});

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>
);
