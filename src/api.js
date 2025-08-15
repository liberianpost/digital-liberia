import axios from 'axios';

console.log('api.js - Initializing API with URL:', import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://libpayapp.liberianpost.com:8081/api', // Fallback to production URL
  withCredentials: true
});

export default api;
