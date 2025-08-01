// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

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
          console.error("Failed to parse user data:", e);
          localStorage.removeItem("moeAuth");
        }
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/moe_login", credentials);
      if (response.data?.success && response.data?.data) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel
        };
        localStorage.setItem("moeAuth", JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
      return { 
        success: false, 
        error: response.data?.message || "Login failed" 
      };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error.response?.data?.message || 
              error.message || 
              "Network error occurred"
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("moeAuth");
    setUser(null);
    try {
      api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user,
    loading,
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

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
