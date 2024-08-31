import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, ScrollView, StyleSheet } from "react-native";
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

  return (
    <ScrollView style={styles.container}>
      {eventos.map((evento) => (
        <View key={evento.id} style={styles.eventoCard}>
          <ImageBackground
            source={{ uri: 'https://www.esneca.com/wp-content/uploads/eventos-sociales.jpg' }} // Reemplaza con la URL de la imagen del evento
            style={styles.imageBackground}
            imageStyle={styles.image}
          >
            <View style={styles.textContainer}>
              <Text style={styles.titulo}>{evento.titulo}</Text>
              <Text style={styles.descripcion}>{evento.descripcion}</Text>
              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>{new Date(evento.fecha).toLocaleDateString()}</Text>
                <Text style={styles.infoText}>{`Duración: ${evento.duracion} minutos`}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  eventoCard: {
    marginBottom: 20,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageBackground: {
    height: 200,
    justifyContent: "flex-end",
  },
  image: {
    borderRadius: 12,
  },
  textContainer: {
    padding: 16,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  descripcion: {
    fontSize: 14,
    color: "#dcdcdc",
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoText: {
    fontSize: 12,
    color: "#dcdcdc",
  },
});
