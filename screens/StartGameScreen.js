import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import Card from "../components/Card";
import Color from "../constant/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setconfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const inputHandler = inputText => {
    console.log(inputText);
    setEnteredValue(inputText);
    console.log(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be a number between 1-99", [
        { text: "okay", style: "destructive" }
      ]);
      return;
    }
    setconfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Have Entered </Text>
        <NumberContainer style={styles.numberContainer}>
          {selectedNumber}
        </NumberContainer>
        <Button
          title="Start Game"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.input}
            autoCapitalize="none"
            keyboardType="numeric"
            maxLength={2}
            blurOnSubmit
            onChangeText={inputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title="Reset"
              onPress={resetInputHandler}
              color={Color.secondary}
            />
            <Button
              title="Confirm"
              onPress={confirmInputHandler}
              color={Color.primary}
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
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  input: {
    width: 50,
    textAlign: "center"
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  numberContainer: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25
  }
});

export default StartGameScreen;
