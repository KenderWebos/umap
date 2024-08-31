import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, ScrollView, StyleSheet, TextInput, Button } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export const UserProfile = () => {
  return (
    <ScrollView>
      <ThemedView>
        <ThemedText type="title">Perfil</ThemedText>
      </ThemedView>

      <ThemedView>
        <TextInput placeholder="Username" />
        <TextInput placeholder="Email" keyboardType="email-address" />
        <TextInput placeholder="Password" secureTextEntry />
        <Button
          title="Save Changes"
          onPress={() => {
            // Handle save action
          }}
        />
      </ThemedView>
    </ScrollView>
  );
};

export default UserProfile;
