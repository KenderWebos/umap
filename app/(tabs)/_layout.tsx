import React, { useState, useEffect } from 'react';
import { Tabs } from "expo-router";

import axios from 'axios';

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Evento {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: string; // Usa string para la fecha si es una cadena ISO o similar
  duracion: number; // Asume que la duración es un número en minutos
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

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

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarBadgeStyle: {
          backgroundColor: '#FF0000', // Color de fondo del badge
          color: '#FFFFFF', // Color del texto del badge
          fontSize: 11, // Tamaño de la fuente
          minWidth: 20, // Ancho mínimo del badge
          height: 19, // Altura del badge
          borderRadius: 10, // Radio de borde del badge (hace que sea circular)
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Map",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "map" : "map-outline"}
              color={color}
            />
          ),          
        }}
      />

      <Tabs.Screen
        name="events"
        options={{          
          title: "Eventos",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "location" : "location-outline"}
              color={color}
            />
          ),
          tabBarBadge: events.length
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
