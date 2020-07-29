import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import Header from './src/components/Header';

// Screens
import StartGameScreen from './src/screens/StartGameScreen';
import GamePlayScreen from './src/screens/GamePlayScreen';

enum CurrentRoute {
  START_GAME,
  GAME_PLAY,
  GAME_OVER,
};

export default function App() {
  const [route, setRoute] = useState<CurrentRoute>(CurrentRoute.START_GAME);
  const [userNumber, setUserNumber] = useState<number>();

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setRoute(CurrentRoute.GAME_PLAY);
  }

  let currentScreen;
  if (route === CurrentRoute.START_GAME) {
    currentScreen = <StartGameScreen onStartGame={startGameHandler}/>;
  } else if (route === CurrentRoute.GAME_PLAY && userNumber) {
    currentScreen = <GamePlayScreen userChoice={userNumber}/>;
  }

  return (
    <View style={styles.screen}>
      <StatusBar />
      <Header title="Guess the Number" />
      {currentScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
