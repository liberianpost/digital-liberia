import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';
import { SecurityLevels, handleLoginSuccess } from '@utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      console.log('Initializing auth...');
      try {
        const storedAuth = localStorage.getItem('moeAuth');
        if (storedAuth) {
          try {
            const parsedUser = JSON.parse(storedAuth);
            setUser(parsedUser);
            console.log('Loaded user from localStorage:', parsedUser);
          } catch (e) {
            console.error('Failed to parse moeAuth:', e);
            localStorage.removeItem('moeAuth');
          }
        } else {
          console.log('No moeAuth found in localStorage');
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setTimeout(() => {
          setLoading(false);
          console.log('Auth loading complete');
        }, 5000); // Fallback timeout to prevent infinite loading
      }
    };
    initializeAuth();
  }, []);

  const login = async (credentials, navigate) => {
    try {
      setLoading(true);
      console.log('Attempting login with credentials:', credentials);
      const response = await api.post('/auth/moe_login', credentials);

      if (response.data?.success) {
        const userData = {
          ...response.data.data,
          securityLevel: response.data.data.securityLevel || SecurityLevels.STUDENT,
        };
        setUser(userData);
        console.log('Login successful, user:', userData);
        handleLoginSuccess(userData, navigate);
        return { success: true };
      }

      console.warn('Login failed:', response.data?.message);
      return { success: false, error: response.data?.message || 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || error.message || 'Login failed',
      };
    } finally {
      setLoading(false);
      console.log('Login attempt complete, loading:', false);
    }
  };

  const logout = async () => {
    try {
      console.log('Attempting logout...');
      await api.post('/auth/logout');
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error);
    }
    localStorage.removeItem('moeAuth');
    setUser(null);
    console.log('User logged out, user:', null);
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
    console.error('useAuth must be used within AuthProvider');
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
