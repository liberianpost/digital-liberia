import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

// Create a cookie manager equivalent to Android's JavaNetCookieJar
const axiosInstance = axios.create({
  baseURL: 'https://libpayapp.liberianpost.com:8081/',
  withCredentials: true, // This handles cookies automatically
  timeout: 30000, // 30 seconds timeout
});

// Add logging interceptor (equivalent to HttpLoggingInterceptor)
axiosInstance.interceptors.request.use(config => {
  console.log('Request:', config.method?.toUpperCase(), config.url);
  return config;
});

axiosInstance.interceptors.response.use(response => {
  console.log('Response:', response.status, response.data);
  return response;
}, error => {
  console.error('Error:', error.response?.status, error.message);
  return Promise.reject(error);
});

// Create cached version if needed
export const api = setupCache(axiosInstance);

// Specific endpoints
export const moeLogin = (credentials) => 
  api.post('api/auth/moe_login', credentials);
