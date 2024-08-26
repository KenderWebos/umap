// src/types/evento.d.ts
export interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // Usa string para la fecha si es una cadena ISO o similar
  duracion: number; // Asume que la duración es un número en minutos
}
