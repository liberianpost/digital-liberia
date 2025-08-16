import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@context/AuthContext';

// Enhanced ErrorBoundary with debug capabilities
class ErrorBoundary extends Component {
  state = { 
    error: null,
    errorInfo: null,
    errorCount: 0,
    lastErrorTime: null
  };

  static getDerivedStateFromError(error) {
    const errorDetails = {
      message: error.message,
      name: error.name,
      stack: error.stack,
      time: new Date().toISOString()
    };
    
    console.group('APP ERROR BOUNDARY CAUGHT');
    console.error('Error:', error);
    console.log('Error Details:', errorDetails);
    console.groupEnd();
    
    return { 
      error,
      errorCount: 1,
      lastErrorTime: new Date().toISOString()
    };
  }

  componentDidCatch(error, errorInfo) {
    console.group('COMPONENT ERROR DETAILS');
    console.error('Error:', error);
    console.log('Component Stack:', errorInfo.componentStack);
    console.log('Current State:', this.state);
    console.groupEnd();

    // Rate limiting to prevent infinite loops
    const now = new Date();
    const lastErrorTime = this.state.lastErrorTime ? new Date(this.state.lastErrorTime) : null;
    const secondsSinceLastError = lastErrorTime ? (now - lastErrorTime) / 1000 : Infinity;

    if (secondsSinceLastError > 5) { // Only count errors >5 seconds apart
      this.setState(prev => ({
        errorInfo,
        errorCount: prev.errorCount + 1,
        lastErrorTime: now.toISOString()
      }));
    }

    // Log to error tracking service if available
    if (window.trackJs) {
      window.trackJs.track(error);
    }
  }

  handleReset = () => {
    console.log('ErrorBoundary reset triggered');
    this.setState({
      error: null,
      errorInfo: null,
      errorCount: 0
    });
  };

  renderFallback() {
    const { error, errorInfo } = this.state;
    
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            {error?.name || 'Application Error'}
          </h1>
          
          <div className="mb-4 space-y-4">
            <div>
              <h2 className="font-semibold mb-1">Error Message:</h2>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                {error?.message || 'No error message available'}
              </div>
            </div>
            
            {error?.stack && (
              <div>
                <h2 className="font-semibold mb-1">Stack Trace:</h2>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                  {error.stack}
                </pre>
              </div>
            )}

            {errorInfo?.componentStack && (
              <div>
                <h2 className="font-semibold mb-1">Component Stack:</h2>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                  {errorInfo.componentStack}
                </pre>
              </div>
            )}
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={this.handleReset}
              className="flex-1 py-3 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
            <button
              onClick={() => {
                console.log('Full page reload initiated');
                window.location.reload();
              }}
              className="flex-1 py-3 px-4 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.state.error) {
      return this.renderFallback();
    }
    return this.props.children;
  }
}

// Debug wrapper for AuthProvider
const DebugAuthProvider = ({ children }) => {
  console.log('[Debug] AuthProvider mounting');
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

// Debug wrapper for BrowserRouter
const DebugRouter = ({ children }) => {
  console.log('[Debug] Router mounting');
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  );
};

const App = () => {
  console.group('App Component');
  console.log('App mounting');
  console.log('Current environment:', import.meta.env.MODE);
  console.groupEnd();

  return (
    <ErrorBoundary>
      <DebugRouter>
        <DebugAuthProvider>
          <AppRoutes />
        </DebugAuthProvider>
      </DebugRouter>
    </ErrorBoundary>
  );
};

export default App;
