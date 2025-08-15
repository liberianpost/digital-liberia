import '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AuthProvider } from '@context/AuthContext';
import App from './App';
import './index.css';

// Load Tailwind CSS via CDN
const tailwindScript = document.createElement('script');
tailwindScript.src = 'https://cdn.tailwindcss.com';
document.head.appendChild(tailwindScript);

// Verify Inter font
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Create Emotion cache
const cache = createCache({
  key: 'css',
  prepend: true,
  speedy: false,
});

// Verify root element
const container = document.getElementById('root');
if (!container) {
  console.error('main.jsx - Failed to find root element with ID "root". Check index.html.');
  document.body.innerHTML = '<h1 style="color: red; text-align: center;">Error: Root element not found</h1>';
  throw new Error('Failed to find root element');
}

// Log mounting
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
  document.body.innerHTML = '<h1 style="color: red; text-align: center;">Error: Failed to render application</h1>';
}
