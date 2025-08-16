import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@context/AuthContext';

class ErrorBoundary extends Component {
  state = { 
    error: null,
    errorInfo: null 
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App Error:', {
      error: error.toString(),
      stack: error.stack,
      componentStack: errorInfo.componentStack
    });
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Application Error</h1>
            <div className="mb-4">
              <p className="font-medium">Error details:</p>
              <pre className="text-sm bg-gray-100 p-2 rounded overflow-auto">
                {this.state.error.toString()}
              </pre>
            </div>
            <div className="mb-6">
              <p className="font-medium">Component stack:</p>
              <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto">
                {this.state.errorInfo?.componentStack || 'Not available'}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const App = () => {
  console.log('App rendering');
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
