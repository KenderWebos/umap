// src/api/userService.js
import apiClient from './apiClient';

const getUser = async (userId) => {
  try {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getUser,
};
