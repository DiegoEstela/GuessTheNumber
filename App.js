import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
export default function App() {
  const [confirmed, setConfirmed] = useState();
  const screen = confirmed ? (
    <Text>Game</Text>
  ) : (
    <StartGameScreen onStartGame={setConfirmed} />
  );
  return (
    <View style={styles.container}>
      <Header title="Guess The Number" />
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
