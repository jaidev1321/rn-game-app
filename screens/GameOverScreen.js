import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!!</Text>
      <Text>Total Clicks : {props.totalClicks}</Text>
      <Text>Number Was : {props.userNumber}</Text>
      <Button title="New Game" onPress={props.newGameHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
});
export default GameOverScreen;
