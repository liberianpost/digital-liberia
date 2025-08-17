import axios from 'axios';

// Create axios instance with same configuration as Android app
const api = axios.create({
  baseURL: 'https://libpayapp.liberianpost.com:8081/',
  withCredentials: true, // Equivalent to JavaNetCookieJar
  timeout: 30000, // 30 seconds timeout like Android
});

// Add request logging
api.interceptors.request.use(config => {
  console.log('Request:', config.method?.toUpperCase(), config.url);
  if (config.data) {
    console.log('Request Data:', config.data);
  }
  return config;
});

// Add response logging
api.interceptors.response.use(response => {
  console.log('Response:', response.status, response.data);
  return response;
}, error => {
  if (error.response) {
    console.error('Error Response:', error.response.status, error.response.data);
  } else {
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
});

// Specific endpoints to match Android interface
export const moeLogin = (credentials) => 
  api.post('api/auth/moe_login', credentials);

export default api;
