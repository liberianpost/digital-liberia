// 1. Enhanced Auth Context (new file)
// src/context/AuthContext.js
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    // Initialize from localStorage
    const storedAuth = localStorage.getItem("moeAuth");
    return storedAuth ? JSON.parse(storedAuth) : null;
  });

  const login = async (credentials) => {
    try {
      const response = await api.post("/auth/moe_login", credentials);
      if (response.data.success) {
        const userData = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          securityLevel: response.data.data.securityLevel
        };
        localStorage.setItem("moeAuth", JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
      return { success: false, error: response.data.message };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || "Login failed" 
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("moeAuth");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
