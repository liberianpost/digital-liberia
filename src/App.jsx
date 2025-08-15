import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { getDefaultRouteForLevel } from './utils/dashboardManager';
import AppRoutes from './AppRoutes';
import { CircularProgress, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create MUI theme (moved outside component to prevent recreation)
const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#ffffff',
    },
  },
});

function AppNavigator() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (user) {
        const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
        navigate(defaultRoute, { replace: true });
      } else {
        navigate('/system', { replace: true });
      }
      setInitialized(true);
    }
  }, [user, loading, navigate]);

  if (!initialized || loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        bgcolor="background.default"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
