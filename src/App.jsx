import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@/context/AuthContext';
import LoadingFallback from '@components/LoadingFallback';

const App = ({ onMount }) => {  // Add prop destructuring here
  const navigate = useNavigate();

  useEffect(() => {
    // Ensure home route loads by default
    if (window.location.pathname === '/') {
      navigate('/', { replace: true });
    }

    // Debug log
    console.log('App initialized - current path:', window.location.pathname);

    // Call the onMount function if provided (this removes the loading screen)
    if (onMount) {
      onMount();
    }
  }, [navigate, onMount]);  // Add onMount to dependencies

  return (
    <AuthProvider>
      <React.Suspense fallback={<LoadingFallback fullScreen />}>
        <AppRoutes />
      </React.Suspense>
    </AuthProvider>
  );
};

export default App;
