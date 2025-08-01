
// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedAuth = localStorage.getItem("moeAuth");
        if (storedAuth) {
          setUser(JSON.parse(storedAuth));
        }
      } catch (error) {
        console.error("Auth initialization error:", error);
        localStorage.removeItem("moeAuth");
      } finally {
        setLoading(false);
      }
    };
    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/moe_login", credentials);
      if (response.data?.success) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel
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
    }
  };

  const logout = () => {
    localStorage.removeItem("moeAuth");
    setUser(null);
    api.post("/auth/logout");
  };

  const value = { user, loading, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
