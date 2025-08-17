import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './index.css';

const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: process.env.NODE_ENV === 'production'
});

const removeLoadingScreen = () => {
  console.log('Attempting to remove loading screen');
  const loadingElement = document.getElementById('app-loading');
  if (loadingElement) {
    console.log('Found app-loading element, removing...');
    loadingElement.style.transition = 'opacity 0.3s ease';
    loadingElement.style.opacity = '0';
    setTimeout(() => {
      console.log('Removing app-loading element from DOM');
      loadingElement.remove();
    }, 300);
  } else {
    console.error('app-loading element not found');
  }
};

const container = document.getElementById('root');
if (!container) {
  console.error('Root element not found');
  document.body.innerHTML = `
    <div style="
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      color: red;
      font-family: sans-serif;
      padding: 2rem;
      text-align: center;
      z-index: 9999;
    ">
      <div>
        <h1 style="font-size: 1.5rem; margin-bottom: 1rem;">
          Root element not found
        </h1>
        <p>Please check your HTML for an element with id="root"</p>
      </div>
    </div>
  `;
  throw new Error('Missing root element');
}

console.log('React app starting to mount');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <App onMount={removeLoadingScreen} />
      </BrowserRouter>
    </CacheProvider>
  </React.StrictMode>
);
console.log('React app mounted');
