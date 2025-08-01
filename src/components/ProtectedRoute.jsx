// src/components/ProtectedRoute.jsx
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ children, requiredLevel }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/system" replace />;
  }
  
  if (user.securityLevel < requiredLevel) {
    return <Navigate to="/moe-dashboard" replace />;
  }

  return children;
}
