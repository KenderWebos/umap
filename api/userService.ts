// src/api/userService.js
import apiClient from './apiClient';
import { ApiResponse } from '@/types/apiResponse';
import type { User } from '@/types/User';

const getUser = async (userId : number) => {
  try {
    const response = await apiClient.get<ApiResponse<User>>(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getUser,
};
