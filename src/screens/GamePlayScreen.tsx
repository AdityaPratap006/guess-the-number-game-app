import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Components
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

// Colors
import { lightThemeColors } from '../themes/colors';

interface GamePlayScreenProps {
    selectedNumber: number;
};

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber = Math.floor(Math.random() * (max - min)) + min;
    if (randomNumber === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return randomNumber;
    }
}

const GamePlayScreen = (props: GamePlayScreenProps) => {
    const [currentGuess, setCurrentGuess] = useState<number>(
        generateRandomBetween(1, 100, props.selectedNumber)
    );

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer
                number={currentGuess}
                numberStyle={styles.number}
                containerStyle={styles.numberContainer}
            />
            <Card style={styles.buttonContainer}>
                <Button
                    title="LOWER"
                    onPress={() => { }}
                    color={lightThemeColors.primary}
                />
                <Button
                    title="UPPER"
                    onPress={() => { }}
                    color={lightThemeColors.primary}
                />
            </Card>
        </View>
    );
};

export default GamePlayScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    numberContainer: {
        marginVertical: 20,
    },
    number: {
        fontSize: 45,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        width: 300,
        maxWidth: '80%',
    }
});
