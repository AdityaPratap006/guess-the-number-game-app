import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Colors
import { lightThemeColors } from '../themes/colors';

interface GameOverScreenProps {
    userChoice: number;
    totalRounds: number;
    onGameRestart: () => void;
};

const GameOverScreen = (props: GameOverScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>Number of Rounds: {props.totalRounds}</Text>
            <Text>Number was: {props.userChoice}</Text>
            <Button
                title="PLAY AGAIN"
                onPress={props.onGameRestart}
                color={lightThemeColors.primary}
            />
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
