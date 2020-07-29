import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GameOverScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Game Over!</Text>
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
});
