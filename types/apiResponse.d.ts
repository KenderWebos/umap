// src/types/apiResponse.ts
import type { Evento } from './evento';

export interface ApiResponse<T> {
  httpCode: number;
  httpMessage: string;
  timestamp: string;
  moreInformation: string;
  userFriendlyError: string;
  response: T;
}