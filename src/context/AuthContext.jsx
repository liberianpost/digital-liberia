import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import api from '@/api';
import { SecurityLevels } from '@utils/securityLevels';
import { handleLoginSuccess, getCurrentSecurityLevel } from '@utils/auth';

const AuthContext = createContext();

// Enhanced error logging for useAuth
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    const error = new Error('useAuth must be used within an AuthProvider');
    console.error('AUTH CONTEXT ERROR:', {
      message: error.message,
      stack: error.stack,
      contextAvailable: !!context
    });
    throw error;
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Enhanced auth state check
  const checkAuthState = useCallback(async () => {
    try {
      console.log('[Auth] Checking authentication state');
      const storedAuth = localStorage.getItem('moeAuth');
      
      if (!storedAuth) {
        console.log('[Auth] No stored auth found');
        setUser(null);
        setIsAuthenticated(false);
        return;
      }

      const storedUser = JSON.parse(storedAuth);
      console.log('[Auth] Found stored user:', {
        id: storedUser?.id,
        username: storedUser?.username,
        securityLevel: storedUser?.securityLevel
      });

      if (!storedUser?.securityLevel) {
        throw new Error('Invalid user data in storage');
      }

      // Verify token with backend
      try {
        const response = await api.get('/auth/verify');
        if (response.data.valid) {
          setUser(storedUser);
          setIsAuthenticated(true);
          console.log('[Auth] User authenticated successfully');
        } else {
          throw new Error('Token verification failed');
        }
      } catch (verifyError) {
        console.error('[Auth] Token verification error:', verifyError);
        localStorage.removeItem('moeAuth');
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('[Auth] Auth check error:', {
        message: error.message,
        stack: error.stack,
        errorObject: error
      });
      setError(error);
      localStorage.removeItem('moeAuth');
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthState();
  }, [checkAuthState]);

  // Enhanced login with better error handling
  const login = async (username, password, navigate) => {
    try {
      console.log('[Auth] Attempting login for:', username);
      setLoading(true);
      setError(null);

      const response = await api.post('/auth/moe_login', { username, password });
      
      if (!response.data?.securityLevel) {
        throw new Error('Invalid server response - missing security level');
      }

      const userData = {
        ...response.data,
        securityLevel: response.data.securityLevel || SecurityLevels.STUDENT,
      };

      console.log('[Auth] Login successful:', {
        id: userData.id,
        username: userData.username,
        securityLevel: userData.securityLevel
      });

      localStorage.setItem('moeAuth', JSON.stringify(userData));
      setUser(userData);
      setIsAuthenticated(true);
      handleLoginSuccess(userData, navigate);
      
      return userData;
    } catch (error) {
      console.error('[Auth] Login failed:', {
        username,
        error: error.response?.data || error.message,
        stack: error.stack
      });
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Enhanced logout
  const logout = async () => {
    try {
      console.log('[Auth] Logging out user:', user?.username);
      await api.post('/auth/logout');
    } catch (error) {
      console.error('[Auth] Logout API error:', error);
    } finally {
      localStorage.removeItem('moeAuth');
      setUser(null);
      setIsAuthenticated(false);
      setError(null);
    }
  };

  const value = {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    logout,
    refreshAuth: checkAuthState,
    securityLevel: user ? getCurrentSecurityLevel(user.securityLevel) : SecurityLevels.STUDENT,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
