// Patch for Emotion's useInsertionEffect bug in production
import * as React from 'react';
if (!React.useInsertionEffect) {
  React.useInsertionEffect = React.useLayoutEffect;
}

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext'; // Changed to use @/ alias
import App from './App'; // Should import App instead of AppRoutes directly
import './index.css';

// Enhanced Error Boundary Component
class ErrorBoundary extends React.Component {
  state = { 
    error: null,
    errorInfo: null
  };

  static getDerivedStateFromError(error) {
    console.error('Root Error Boundary caught:', error);
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component stack:', errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({ error: null, errorInfo: null });
    window.location.reload();
  };

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
            
            <div className="mb-4 space-y-2">
              <div>
                <span className="font-semibold">Error:</span>
                <pre className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
                  {this.state.error.toString()}
                </pre>
              </div>
              
              {this.state.error.stack && (
                <div>
                  <span className="font-semibold">Stack trace:</span>
                  <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                    {this.state.error.stack}
                  </pre>
                </div>
              )}
            </div>

            {this.state.errorInfo?.componentStack && (
              <div className="mb-6">
                <span className="font-semibold">Component stack:</span>
                <pre className="text-xs bg-gray-100 p-2 rounded overflow-x-auto">
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}

            <div className="flex gap-4">
              <button
                onClick={this.handleReset}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.reload()}
                className="flex-1 py-2 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Verify root element exists
const container = document.getElementById('root');
if (!container) {
  throw new Error("Failed to find the root element");
}

const root = createRoot(container);

try {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <BrowserRouter>
          <AuthProvider>
            <App /> {/* Changed from AppRoutes to App */}
          </AuthProvider>
        </BrowserRouter>
      </ErrorBoundary>
    </React.StrictMode>
  );
} catch (error) {
  console.error('Failed to render application:', error);
  document.body.innerHTML = `
    <div style="color: red; text-align: center; padding: 2rem;">
      <h1>Critical Application Error</h1>
      <p>${error.message}</p>
      <button onclick="window.location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: #2563eb; color: white; border: none; border-radius: 0.25rem;">
        Reload Application
      </button>
    </div>
  `;
}
