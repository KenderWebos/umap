// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://kevincampos.cl/api',
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    // Puedes agregar headers como tokens aquí si es necesario
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores globales aquí
    return Promise.reject(error);
  }
);

export default apiClient;
