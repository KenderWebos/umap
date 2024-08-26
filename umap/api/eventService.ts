// src/api/eventService.ts
import apiClient from './apiClient';
import { Evento } from '../types/evento';

const getEvents = async (): Promise<Evento[]> => {
  try {
    const response = await apiClient.get<Evento[]>(`/v1/evento`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default {
  getEvents,
};
