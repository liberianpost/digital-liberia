import React, { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { getDefaultRouteForLevel } from './utils/dashboardManager';
import AppRoutes from './AppRoutes';
import Home from './Home';
import System from './System';
import Dssn from './Dssn';
import Digitalliberia from './Digitalliberia';
import Libpay from './Libpay';

function AppNavigator() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const defaultRoute = getDefaultRouteForLevel(user.securityLevel);
      navigate(defaultRoute, { replace: true }); // Replace history to prevent back navigation
    } else {
      navigate('/system', { replace: true }); // Redirect to login if not authenticated
    }
  }, [user, navigate]);

  return (
    <div className="app-container">
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppNavigator />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
