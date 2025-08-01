// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://libpayapp.liberianpost.com:8081/api', // Update with your backend URL
  withCredentials: true
});

export default api;
