import React, { useEffect, useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { getDefaultRouteForLevel } from './utils/dashboardManager';
import AppRoutes from './AppRoutes';
import { CircularProgress, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Keep these imports if they're used in your routes
import Home from './Home';
import System from './System';
import Dssn from './Dssn';
import Digitalliberia from './Digitalliberia';
import Libpay from './Libpay';

// Create theme with proper defaults
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
      <AuthProvider>
        <BrowserRouter>
          <AppNavigator />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
