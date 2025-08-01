// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api'; // Your configured axios instance

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      const storedAuth = localStorage.getItem("moeAuth");
      if (storedAuth) {
        setUser(JSON.parse(storedAuth));
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/moe_login", credentials);
      
      if (response.data.success && response.data.data) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel
        };
        
        localStorage.setItem("moeAuth", JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
      return { success: false, error: response.data.message || "Login failed" };
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
    api.post("/auth/logout"); // Optional: notify backend
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading,
      login, 
      logout 
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
