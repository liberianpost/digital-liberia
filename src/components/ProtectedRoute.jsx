// src/components/ProtectedRoute.jsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@context/AuthContext';
import { SecurityLevels } from '@utils/securityLevels';

const ProtectedRoute = ({ children, requiredLevel }) => {
  const { user, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      console.warn('Auth redirect triggered', { 
        path: location.pathname,
        authenticated: isAuthenticated,
        user
      });
      navigate('/system', { 
        state: { from: location },
        replace: true 
      });
    }
  }, [loading, isAuthenticated, navigate, location]);

  if (loading) return null;

  if (!isAuthenticated) {
    return null; // Redirect will handle this
  }

  // Check security level if required
  if (requiredLevel && user?.securityLevel < requiredLevel) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-xl font-bold text-red-600">Access Denied</h1>
        <p>You don't have permission to view this page</p>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
