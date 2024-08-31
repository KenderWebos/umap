import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, TextInput, Button } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export const UserProfile = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="person" style={styles.headerImage} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile Settings</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.formContainer}>
        <TextInput 
          placeholder="Username"
          style={styles.input}
        />
        <TextInput 
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput 
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />
        <Button 
          title="Save Changes"
          onPress={() => {
            // Handle save action
          }}
        />
      </ThemedView>
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
  formContainer: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    padding: 8,
    fontSize: 16,
  },
});

export default UserProfile;
