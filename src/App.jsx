import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@/context/AuthContext';
import LoadingFallback from '@components/LoadingFallback';

const App = ({ onMount }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.pathname === '/') {
      navigate('/', { replace: true });
    }
    console.log('App initialized - current path:', window.location.pathname);
    if (onMount) {
      console.log('Calling onMount to remove loading screen');
      onMount();
    }
  }, [navigate, onMount]);

  return (
    <AuthProvider>
      <React.Suspense fallback={<LoadingFallback fullScreen />}>
        <AppRoutes />
      </React.Suspense>
    </AuthProvider>
  );
};

export default App;
