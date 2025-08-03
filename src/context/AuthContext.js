import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAuth = localStorage.getItem('moeAuth');
        if (storedAuth) {
          setUser(JSON.parse(storedAuth));
        }
      } catch (e) {
        localStorage.removeItem('moeAuth');
        setError('Failed to parse stored authentication');
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/moe_login', credentials);
      
      if (response.data?.success) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel
        };
        
        localStorage.setItem('moeAuth', JSON.stringify(userData));
        setUser(userData);
        setError(null);
        return { success: true };
      }
      
      const errorMsg = response.data?.message || 'Login failed';
      setError(errorMsg);
      return { success: false, error: errorMsg };
      
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (e) {
      console.error('Logout API error:', e);
    } finally {
      localStorage.removeItem('moeAuth');
      setUser(null);
      setError(null);
    }
  };

  // Context value
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for consuming auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Export the context itself for rare cases where it's needed directly
export default AuthContext;
