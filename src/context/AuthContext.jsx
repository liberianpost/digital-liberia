import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';
import { SecurityLevels, handleLoginSuccess } from '@/utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const storedAuth = localStorage.getItem('moeAuth');
      if (storedAuth) {
        try {
          setUser(JSON.parse(storedAuth));
        } catch (e) {
          console.error('Failed to parse moeAuth:', e);
          localStorage.removeItem('moeAuth');
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const login = async (credentials, navigate) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/moe_login', credentials);

      if (response.data?.success) {
        const userData = {
          ...response.data.data,
          securityLevel: response.data.data.securityLevel || SecurityLevels.STUDENT,
        };
        setUser(userData);
        handleLoginSuccess(userData, navigate); // Pass navigate
        return { success: true };
      }

      return { success: false, error: response.data?.message || 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return {
        success: false,
        error: error.response?.data?.message || error.message,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
    }
    localStorage.removeItem('moeAuth');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
