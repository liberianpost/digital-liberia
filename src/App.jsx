import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@/context/AuthContext';
import LoadingFallback from '@components/LoadingFallback';

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure home route loads by default
    if (window.location.pathname === '/') {
      navigate('/', { replace: true });
    }

    // Debug log
    console.log('App initialized - current path:', window.location.pathname);
  }, [navigate]);

  return (
    <AuthProvider>
      <React.Suspense fallback={<LoadingFallback fullScreen />}>
        <AppRoutes />
      </React.Suspense>
    </AuthProvider>
  );
};

export default App;
