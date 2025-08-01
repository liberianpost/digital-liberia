// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from 'react';
import api from '../api'; // Using your configured axios instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedAuth = localStorage.getItem("moeAuth");
        if (storedAuth) {
          setUser(JSON.parse(storedAuth));
          
          // Optional: Validate token with backend
          try {
            await api.get('/auth/validate');
          } catch (validationError) {
            console.warn("Session validation failed:", validationError);
            logout();
          }
        }
      } catch (err) {
        console.error("Auth initialization error:", err);
        setError("Failed to initialize authentication");
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await api.post("/auth/moe_login", credentials);
      
      if (response.data?.success && response.data?.data) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel,
          token: response.data.data.token // If using JWT
        };
        
        localStorage.setItem("moeAuth", JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
      return { 
        success: false, 
        error: response.data?.message || "Login failed: Invalid credentials" 
      };
    } catch (error) {
      console.error("Login error:", error);
      const errorMsg = error.response?.data?.message || 
                      error.message || 
                      "Network error occurred";
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      localStorage.removeItem("moeAuth");
      setUser(null);
      setError(null);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading,
      error,
      login, 
      logout,
      isAuthenticated: !!user
    }}>
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
