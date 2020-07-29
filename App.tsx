import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

// Components
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar />
      <Header title="Guess the Number"/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
