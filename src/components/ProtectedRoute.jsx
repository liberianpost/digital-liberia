// src/components/ProtectedRoute.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import { hasPermission } from '../utils/auth';

export default function ProtectedRoute({ 
  children, 
  requiredLevel = 1,
  redirectTo = "/login"
}) {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  if (!hasPermission(requiredLevel)) {
    return (
      <Navigate 
        to="/unauthorized" 
        state={{ 
          from: location,
          requiredLevel 
        }} 
        replace 
      />
    );
  }

  return children;
}
