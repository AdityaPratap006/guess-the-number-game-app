import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

// Components
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

// Colors
import { lightThemeColors } from '../themes/colors';

interface GamePlayScreenProps {
    userChoice: number;
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

enum Direction {
    LOWER,
    HIGHER,
};

const GamePlayScreen = (props: GamePlayScreenProps) => {
    const [currentGuess, setCurrentGuess] = useState<number>(
        generateRandomBetween(1, 100, props.userChoice)
    );

    const currentLow = useRef<number>(1);
    const currentHigh = useRef<number>(100);

    const validateMove = (direction: Direction) => {
        if (direction === Direction.LOWER && currentGuess < props.userChoice) {
            return false;
        }

        if (direction === Direction.HIGHER && currentGuess > props.userChoice) {
            return false;
        }

        return true;
    }

    const nextGuessHandler = (direction: Direction) => {
        const isValidMove = validateMove(direction);

        if (!isValidMove) {
            Alert.alert(
                `Don't Lie!! 😏`,
                `You know this is wrong...😝`,
                [
                    { text: 'Sorry!', style: 'cancel' },
                ]
            );
            return;
        }

        if (direction === Direction.LOWER) {
            currentHigh.current = currentGuess;
        } else if (direction === Direction.HIGHER) {
            currentLow.current = currentGuess;
        }

        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
    }

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
                    onPress={() => { 
                        nextGuessHandler(Direction.LOWER);
                     }}
                    color={lightThemeColors.primary}
                />
                <Button
                    title="HIGHER"
                    onPress={() => {
                        nextGuessHandler(Direction.HIGHER);
                     }}
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
