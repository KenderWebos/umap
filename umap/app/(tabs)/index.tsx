import React from "react";
//a
import { View, Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { WebView } from "react-native-webview";

export default function HomeScreen() {
  return (
    <View
    >
      {/* <Image source={{uri: 'https://kevincampos.cl/images/heritech/ht_logo.png'}}
       style={{width: 1000, height: 400}} /> */}

      {/* <WebView
        source={{ uri: "https://kevincampos.cl/umap" }}
      /> */}

      {/* <WebView source={{ uri: "https://www.google.com" }} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
