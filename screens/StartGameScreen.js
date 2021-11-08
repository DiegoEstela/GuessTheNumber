import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Card from "../components/Card";

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Enter a Number</Text>
        <TextInput />
        <View>
          <Button title="Reset" onPress={() => {}} />
          <Button title="Confirm" onPress={() => {}} />
        </View>
      </Card>
      <Card>
        <Text> Start Game</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    padding: 20,
    marginVertical: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
