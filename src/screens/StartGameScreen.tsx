import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    GestureResponderEvent,
    Alert,
} from 'react-native';

// Components
import Card from '../components/Card';

// Colors
import { lightThemeColors } from '../themes/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<number | undefined>();

    const numberInputHandler = (inputText: string) => {
        const filteredInput = inputText.replace(/[^0-9]/g, '');
        setEnteredValue(filteredInput);
    }

    const closeKeyboard = () => {
        Keyboard.dismiss();
    }

    const closeKeyboardOnTouchHandler = (_: GestureResponderEvent) => {
        closeKeyboard();
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber === undefined || chosenNumber <= 0) {
            Alert.alert(
                'Invalid number!',
                'Chose a number between 1 and 99.',
                [
                    {
                        text: 'Okay',
                        style: 'destructive',
                        onPress: resetInputHandler,
                    }
                ],
            );
            return;
        }

        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        closeKeyboard();
    }

    let confirmedOutput;
    if (confirmed && selectedNumber !== undefined) {
        confirmedOutput = (
            <Card>
                <Text>Chosen Number: {selectedNumber <= 9 ? '0' + selectedNumber : selectedNumber}</Text>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboardOnTouchHandler}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button
                                title="RESET"
                                onPress={resetInputHandler}
                                color={lightThemeColors.accent}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                title="CONFIRM"
                                onPress={confirmInputHandler}
                                color={lightThemeColors.primary}
                            />
                        </View>
                    </View>
                </Card>
                {
                    confirmedOutput
                }
            </View>
        </TouchableWithoutFeedback>
    );
};

export default StartGameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginVertical: 10,
        color: lightThemeColors.text,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        width: 80,
        height: 60,
        fontSize: 30,
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    button: {
        width: '40%',
    }
});
