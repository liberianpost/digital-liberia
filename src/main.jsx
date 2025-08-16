import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './index.css';

// 1. Fix Tailwind CSS warning
const tailwindLink = document.createElement('link');
tailwindLink.href = 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
tailwindLink.rel = 'stylesheet';
document.head.appendChild(tailwindLink);

// 2. Create Emotion cache with better configuration
const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: false
});

// 3. Enhanced root element checking
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
        Critical Error: Root element not found
      </h1>
      <p>Please check your index.html file for an element with id="root"</p>
    </div>
  `;
  document.body.appendChild(errorElement);
  throw new Error('Root element not found');
}

// 4. Create root with error boundary
const root = createRoot(container);

try {
  root.render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CacheProvider>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Root render failed:', error);
  container.innerHTML = `
    <div style="padding: 2rem; text-align: center; color: #dc2626;">
      <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">
        Application Failed to Load
      </h1>
      <p style="margin-bottom: 1rem;">${error.message}</p>
      <button 
        onclick="window.location.reload()" 
        style="padding: 0.5rem 1rem; background: #2563eb; color: white; border: none; border-radius: 0.25rem;"
      >
        Try Again
      </button>
    </div>
  `;
}
