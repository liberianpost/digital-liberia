import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@context/AuthContext';

class ErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    console.error('App.jsx - ErrorBoundary caught:', {
      message: error.message,
      stack: error.stack,
      componentStack: error.componentStack
    });
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App.jsx - Component error:', error, errorInfo);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-900">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
            <h1 className="text-2xl font-bold mb-4">Something Went Wrong</h1>
            <p className="text-red-600 mb-6">{this.state.error.message || 'An unexpected error occurred'}</p>
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

const App = () => {
  console.log('App.jsx - Rendering App component');
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
