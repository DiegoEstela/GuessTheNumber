import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = () => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleInputValue = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.text}>Enter a Number</Text>
        <Input
          maxLength={2}
          keyboardType="numeric"
          autoCapitalation="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={handleInputValue}
        />
        <View style={styles.buttonContainer}>
          <Button title="Reset" color={colors.primary} />
          <Button title="Confirm" color={colors.accents} />
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
    marginVertical: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
});

export default StartGameScreen;
