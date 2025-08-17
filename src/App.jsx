import React from 'react';
import AppRoutes from './AppRoutes';
import { AuthProvider } from '@/context/AuthContext';

const App = () => {
  React.useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('[App] Initializing application');
    }
  }, []);

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
