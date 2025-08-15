import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';
import { SecurityLevels } from '@utils/securityLevels';
import { handleLoginSuccess, getCurrentSecurityLevel } from '@utils/auth';

console.log('AuthContext.jsx - Initializing AuthContext');

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error('AuthContext.jsx - useAuth must be used within an AuthProvider');
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('AuthContext.jsx - Checking auth state');
    const checkAuth = async () => {
      try {
        const storedUser = JSON.parse(localStorage.getItem('moeAuth') || 'null');
        console.log('AuthContext.jsx - Stored user:', storedUser);
        if (storedUser && storedUser.securityLevel) {
          setUser(storedUser);
          setIsAuthenticated(true);
        } else {
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('AuthContext.jsx - Error checking auth:', error);
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const login = async (username, password, navigate) => {
    try {
      console.log('AuthContext.jsx - Attempting login for:', username);
      const response = await api.post('/auth/moe_login', { username, password });
      console.log('AuthContext.jsx - Login response:', response.data);
      const userData = {
        ...response.data,
        securityLevel: response.data.securityLevel || SecurityLevels.STUDENT,
      };
      setUser(userData);
      setIsAuthenticated(true);
      handleLoginSuccess(userData, navigate);
      return userData;
    } catch (error) {
      console.error('AuthContext.jsx - Login error:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      console.log('AuthContext.jsx - Logging out user:', user);
      await api.post('/auth/logout');
      localStorage.removeItem('moeAuth');
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('AuthContext.jsx - Logout error:', error);
      localStorage.removeItem('moeAuth');
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout,
    securityLevel: user ? getCurrentSecurityLevel() : SecurityLevels.STUDENT,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
