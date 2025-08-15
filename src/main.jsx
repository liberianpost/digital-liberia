import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { AuthProvider } from '@/context/AuthContext';
import AppRoutes from './AppRoutes';
import './index.css';

const cache = createCache({ key: 'css' });

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      console.error('Root ErrorBoundary caught:', this.state.error);
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-red-600 mb-6">{this.state.error.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find root element');
const root = createRoot(container);

root.render(
  <ErrorBoundary>
    <CacheProvider value={cache}>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </CacheProvider>
  </ErrorBoundary>
);
