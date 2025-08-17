import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './index.css';

// Remove loading screen before React mounts
const loadingElement = document.getElementById('app-loading');
if (loadingElement) {
  loadingElement.style.opacity = '0';
  setTimeout(() => loadingElement.remove(), 500);
}

// Emotion cache configuration
const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: process.env.NODE_ENV === 'production'
});

// Root element verification
const container = document.getElementById('root');
if (!container) {
  const errorElement = document.createElement('div');
  errorElement.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #dc2626;
    font-family: sans-serif;
    padding: 2rem;
    text-align: center;
    z-index: 9999;
  `;
  errorElement.innerHTML = `
    <div>
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">
        Root element not found
      </h1>
      <p>Please check your HTML for an element with id="root"</p>
    </div>
  `;
  document.body.appendChild(errorElement);
  throw new Error('Root element not found');
}

// Root render
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>
);

// Debugging logs
console.log('App mounted successfully');
console.log('CSS loaded:', document.querySelector('link[rel="stylesheet"]') ? 'Yes' : 'No');
