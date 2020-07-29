import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Start Game Screen</Text>
        </View>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
});
