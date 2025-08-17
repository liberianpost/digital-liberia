import axios from 'axios';

const api = axios.create({
  baseURL: 'https://libpayapp.liberianpost.com:8081/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add CORS headers for all requests
api.interceptors.request.use(config => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Allow-Methods'] = 'GET,PUT,POST,DELETE,PATCH,OPTIONS';
  config.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization';
  return config;
});

export const moeLogin = async (credentials) => {
  try {
    const response = await api.post('/auth/moe_login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export default api;
