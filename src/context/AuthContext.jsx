import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';
import { SecurityLevels, handleLoginSuccess } from '@utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      console.log('AuthContext.jsx - Initializing auth...');
      try {
        const storedAuth = localStorage.getItem('moeAuth');
        if (storedAuth) {
          try {
            const parsedUser = JSON.parse(storedAuth);
            setUser(parsedUser);
            console.log('AuthContext.jsx - Loaded user from localStorage:', parsedUser);
          } catch (e) {
            console.error('AuthContext.jsx - Failed to parse moeAuth:', e);
            localStorage.removeItem('moeAuth');
          }
        } else {
          console.log('AuthContext.jsx - No moeAuth found in localStorage');
        }
      } catch (error) {
        console.error('AuthContext.jsx - Auth initialization error:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          console.log('AuthContext.jsx - Auth loading complete');
        }, 2000); // Reduced to 2s for faster debugging
      }
    };
    initializeAuth();
  }, []);

  const login = async (credentials, navigate) => {
    try {
      setLoading(true);
      console.log('AuthContext.jsx - Attempting login with credentials:', credentials);
      const response = await api.post('/auth/moe_login', credentials);

      if (response.data?.success) {
        const userData = {
          ...response.data.data,
          securityLevel: response.data.data.securityLevel || SecurityLevels.STUDENT,
        };
        setUser(userData);
        console.log('AuthContext.jsx - Login successful, user:', userData);
        handleLoginSuccess(userData, navigate);
        return { success: true };
      }

      console.warn('AuthContext.jsx - Login failed:', response.data?.message);
      return { success: false, error: response.data?.message || 'Login failed' };
    } catch (error) {
      console.error('AuthContext.jsx - Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Login failed',
      };
    } finally {
      setLoading(false);
      console.log('AuthContext.jsx - Login attempt complete, loading:', false);
    }
  };

  const logout = async () => {
    try {
      console.log('AuthContext.jsx - Attempting logout...');
      await api.post('/auth/logout');
      console.log('AuthContext.jsx - Logout successful');
    } catch (error) {
      console.error('AuthContext.jsx - Logout error:', error);
    }
    localStorage.removeItem('moeAuth');
    setUser(null);
    console.log('AuthContext.jsx - User logged out, user:', null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('AuthContext.jsx - useAuth must be used within AuthProvider');
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
