import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import App from './App';
import './index.css';

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

// Error boundary fallback
const Fallback = ({ error, resetError }) => (
  <div style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    padding: '2rem',
    flexDirection: 'column'
  }}>
    <h1 style={{ color: '#dc2626', marginBottom: '1rem' }}>Application Error</h1>
    <pre style={{
      background: '#f5f5f5',
      padding: '1rem',
      borderRadius: '0.25rem',
      maxWidth: '800px',
      overflowX: 'auto'
    }}>
      {error.toString()}
    </pre>
    <button 
      onClick={resetError}
      style={{
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        background: '#2563eb',
        color: 'white',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer'
      }}
    >
      Try Again
    </button>
  </div>
);

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
