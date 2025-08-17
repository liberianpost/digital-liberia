import axios from 'axios';

const api = axios.create({
  baseURL: 'https://libpayapp.liberianpost.com:8081/api',
  withCredentials: true
});

// Add request interceptor for CORS
api.interceptors.request.use(config => {
  // Don't set Access-Control-Allow-Origin here - that's a response header
  config.headers['Content-Type'] = 'application/json';
  return config;
});

// Add response interceptor
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      // Server responded with error status
      return Promise.reject(error.response.data);
    } else if (error.request) {
      // Request was made but no response
      return Promise.reject({ message: 'Network error. Please check your connection.' });
    } else {
      // Something else happened
      return Promise.reject({ message: 'An unexpected error occurred' });
    }
  }
);

export default api;
