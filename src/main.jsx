import '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AuthProvider } from '@context/AuthContext';
import App from './App';
import './index.css';

// Create Inter font link
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
fontLink.crossOrigin = 'anonymous';
document.head.appendChild(fontLink);

// Create Emotion cache
const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: process.env.NODE_ENV === 'production',
});

// Verify root element
const container = document.getElementById('root');
if (!container) {
  const errorMessage = 'Failed to find root element with ID "root". Check index.html.';
  console.error('main.jsx -', errorMessage);
  document.body.innerHTML = `<h1 style="color: red; text-align: center; font-family: sans-serif; padding: 2rem;">${errorMessage}</h1>`;
  throw new Error(errorMessage);
}

console.log('main.jsx - Mounting React app...');

const root = createRoot(container);

try {
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
} catch (error) {
  console.error('main.jsx - Root render error:', error);
  document.body.innerHTML = `
    <h1 style="color: red; text-align: center; font-family: sans-serif; padding: 2rem;">
      Application Error: ${error.message}
    </h1>
    <p style="text-align: center; font-family: sans-serif;">
      Please check the console for more details
    </p>
  `;
}
