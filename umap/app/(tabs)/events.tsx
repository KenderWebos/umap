import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, FlatList, View, Platform, Image } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define la interfaz para los eventos
interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // Usa string para la fecha si es una cadena ISO o similar
  duracion: number; // Asume que la duración es un número en minutos
}

export default function EventsScreen() {
  const [events, setEvents] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get<Evento[]>('https://kevincampos.cl/api/v1/evento');
        setEvents(response.data);
      } catch (err) {
        setError('Error al cargar eventos');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <ThemedText>Cargando eventos...</ThemedText>;
  if (error) return <ThemedText>{error}</ThemedText>;

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="location" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Eventos UCSC</ThemedText>
      </ThemedView>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Collapsible title={item.titulo}>
            <ThemedText>{item.descripcion}</ThemedText>
            <ThemedText>Fecha: {new Date(item.fecha).toLocaleString()}</ThemedText>
            <ThemedText>Duración: {item.duracion} minutos</ThemedText>
          </Collapsible>
        )}
      />

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
