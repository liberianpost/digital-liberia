import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@context/AuthContext';

class ErrorBoundary extends Component {
  state = { 
    error: null,
    errorInfo: null,
    errorCount: 0
  };

  static getDerivedStateFromError(error) {
    console.error('APP ERROR BOUNDARY CAUGHT:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    });
    return { 
      error,
      errorCount: 1
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error('COMPONENT ERROR DETAILS:', {
      componentStack: errorInfo.componentStack,
      error: error.toString(),
      errorObject: error
    });
    this.setState({ 
      errorInfo,
      errorCount: this.state.errorCount + 1
    });
    
    // Prevent infinite loops
    if (this.state.errorCount > 2) {
      console.error('CRITICAL ERROR LOOP DETECTED');
      window.location.reload();
    }
  }

  handleReset = () => {
    this.setState({
      error: null,
      errorInfo: null,
      errorCount: 0
    });
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

const App = () => {
  console.log('App component rendering');
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
