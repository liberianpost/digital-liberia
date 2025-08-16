import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '@/context/AuthContext';
import App from './App';
import './index.css';

// Polyfill for Emotion in React <18
if (React.useInsertionEffect === undefined) {
  React.useInsertionEffect = React.useLayoutEffect;
}

class ErrorBoundary extends React.Component {
  state = { error: null, errorInfo: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={styles.errorContainer}>
          <div style={styles.errorBox}>
            <h1 style={styles.errorTitle}>Application Error</h1>
            <pre style={styles.errorMessage}>
              {this.state.error.toString()}
            </pre>
            <div style={styles.buttonGroup}>
              <button 
                onClick={() => window.location.reload()} 
                style={styles.primaryButton}
              >
                Reload Application
              </button>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const styles = {
  errorContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f4f6',
    padding: '1rem'
  },
  errorBox: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    width: '100%'
  },
  errorTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#dc2626',
    marginBottom: '1rem'
  },
  errorMessage: {
    backgroundColor: '#f5f5f5',
    padding: '1rem',
    borderRadius: '0.25rem',
    overflowX: 'auto',
    marginBottom: '1.5rem'
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem'
  },
  primaryButton: {
    flex: 1,
    padding: '0.5rem 1rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '0.25rem',
    cursor: 'pointer'
  }
};

const container = document.getElementById('root');
if (!container) {
  document.body.innerHTML = `
    <div style="color: red; padding: 2rem; text-align: center;">
      <h1>Root element missing</h1>
      <p>Cannot find element with ID "root"</p>
    </div>
  `;
  throw new Error('Missing root element');
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
