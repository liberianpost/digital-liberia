import React, { useEffect, useState, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { getDefaultRouteForLevel } from './utils/dashboardManager';
import AppRoutes from './AppRoutes';
import { CircularProgress, Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create Emotion cache
const cache = createCache({
  key: 'css',
  prepend: true,
});

// Create MUI theme
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
});

// Error Boundary Component
class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box p={4}>
          <Typography color="error" variant="h6">
            Error: {this.state.error?.message || 'An unexpected error occurred'}
          </Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

function AppNavigator() {
  const { user, loading } = useAuth() || { user: null, loading: true }; // Fallback for useAuth
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    console.log('AppNavigator useEffect - loading:', loading, 'user:', user);
    if (!loading) {
      try {
        if (user && user.securityLevel) {
          const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
          console.log('Navigating to default route:', defaultRoute);
          navigate(defaultRoute, { replace: true });
        } else {
          console.log('Navigating to /system (no user or invalid user)');
          navigate('/system', { replace: true });
        }
        setInitialized(true);
      } catch (error) {
        console.error('Navigation error:', error);
        setInitialized(true); // Proceed to render even if navigation fails
      }
    }
  }, [user, loading, navigate]);

  if (!initialized || loading) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <CircularProgress />
        <Typography mt={2}>Loading application...</Typography>
      </Box>
    );
  }

  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
}

function App() {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppNavigator />
        </ErrorBoundary>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
