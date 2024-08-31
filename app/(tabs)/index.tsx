import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView, StyleSheet, Linking, Button} from "react-native";
import eventService from "../../api/eventService";
import { Evento } from "../../types/evento";

export default function HomeScreen() {
  const [eventos, setEventos] = useState<Evento[]>([]);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const data = await eventService.getEvents();
        setEventos(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEventos();
  }, []);

  const openURL = () => {
    Linking.openURL('https://kevincampos.cl/umap');
  }

  return (
    <ScrollView>
      <Text>Bienvenidos a UMAP!</Text>
      <Button title="Abrir Página Web" onPress={openURL} />
    </ScrollView>
  );
}
