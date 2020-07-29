import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import Header from './src/components/Header';

// Screens
import StartGameScreen from './src/screens/StartGameScreen';
import GamePlayScreen from './src/screens/GamePlayScreen';
import GameOverScreen from './src/screens/GameOverScreen';

enum CurrentRoute {
  START_GAME,
  GAME_PLAY,
  GAME_OVER,
};

export default function App() {
  const [route, setRoute] = useState<CurrentRoute>(CurrentRoute.START_GAME);
  const [userNumber, setUserNumber] = useState<number>();
  const [rounds, setRounds] = useState<number>(0);

  const startGameHandler = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
    setRoute(CurrentRoute.GAME_PLAY);
  }

  const gameOverHandler = (numOfRounds: number) => {
    setRounds(numOfRounds);
    setRoute(CurrentRoute.GAME_OVER);
  }

  const restartGameHandler = () => {
    setRounds(0);
    setRoute(CurrentRoute.START_GAME);
    setUserNumber(undefined);
  }

  let currentScreen;
  if (route === CurrentRoute.START_GAME) {
    currentScreen = (
      <StartGameScreen
        onStartGame={startGameHandler}
      />
    );
  } else if (route === CurrentRoute.GAME_PLAY && userNumber) {
    currentScreen = (
      <GamePlayScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
      />
    );
  } else if (route === CurrentRoute.GAME_OVER && userNumber) {
    currentScreen = (
      <GameOverScreen
        userChoice={userNumber}
        totalRounds={rounds}
        onGameRestart={restartGameHandler}
      />
    );
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
