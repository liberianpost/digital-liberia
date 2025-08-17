import axios from 'axios';

console.log('api.js - Initializing API with URL:', import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://libpayapp.liberianpost.com:8081/api',
  withCredentials: true
});

// Add this new function for MOE login
export const moeLogin = async (credentials) => {
  try {
    const response = await api.post('/auth/moe_login', credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export default api;
