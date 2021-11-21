import React, { useState } from "react";
import {
  View,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  StyleSheet,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import colors from "../constants/colors";
import Input from "../components/Input";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState("");

  const handleInputValue = (text) => {
    setEnteredValue(text.replace(/[^0-9]/g, ""));
  };

  const handleResetInput = () => setEnteredValue("");

  const handleConfirmInput = () => {
    const choseNumber = parseInt(enteredValue);
    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) return;
    setConfirmed(enteredValue);
    setEnteredValue("");
  };

  const handleStartGame = () => onStartGame(confirmed);

  const confirmedOutput = confirmed ? (
    <Card>
      <Text style={{ margin: 30 }}>You selected: {confirmed}</Text>
      <Button
        onPress={handleStartGame}
        title="START GAME"
        color={colors.primary}
      />
    </Card>
  ) : null;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
            <Button
              style={styles.button}
              title="Reset"
              color={colors.primary}
              onPress={handleResetInput}
            />
            <Button
              style={styles.button}
              title="Confirm"
              color={colors.accents}
              onPress={handleConfirmInput}
            />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
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
    width: "80%",
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
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
