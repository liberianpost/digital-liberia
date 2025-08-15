import { createContext, useContext, useState, useEffect } from 'react';
import api from '@/api';
import { SecurityLevels } from '@/utils/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      const storedAuth = localStorage.getItem("moeAuth");
      if (storedAuth) {
        try {
          setUser(JSON.parse(storedAuth));
        } catch (e) {
          localStorage.removeItem("moeAuth");
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      setLoading(true);
      const response = await api.post("/auth/moe_login", credentials);
      
      if (response.data?.success) {
        const userData = {
          ...response.data.data,
          securityLevel: response.data.data.securityLevel || SecurityLevels.STUDENT
        };
        
        localStorage.setItem("moeAuth", JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
      
      return { success: false, error: response.data?.message || "Login failed" };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || error.message
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("moeAuth");
    setUser(null);
    api.post("/auth/logout");
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
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
