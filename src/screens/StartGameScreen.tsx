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
    Dimensions,
} from 'react-native';

// Components
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';

// Theme
import { lightThemeColors, defaultStyles } from '../themes';


interface StartGameScreenProps {
    onStartGame: (num: number) => void;
};

const StartGameScreen = (props: StartGameScreenProps) => {
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

    const startGameHandler = () => {
        if (confirmed && selectedNumber) {
            props.onStartGame(selectedNumber);
        }
    }

    let confirmedOutput;
    if (confirmed && selectedNumber !== undefined) {
        confirmedOutput = (
            <Card style={styles.summary}>
                <Text>You Selected</Text>
                <NumberContainer
                    number={selectedNumber <= 9 ? '0' + selectedNumber : selectedNumber}
                    containerStyle={{
                        marginVertical: 24,
                    }}
                    numberStyle={{
                        fontSize: 45,
                    }}
                />
                <CustomButton
                    onPress={startGameHandler}
                >
                    START GAME
                </CustomButton>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={closeKeyboardOnTouchHandler}>
            <View style={styles.screen}>
                <Text style={[defaultStyles.titleText, styles.title]}>Start a New Game!</Text>
                <Card style={styles.inputContainer}>
                    <Text style={defaultStyles.bodyText}>Select a Number</Text>
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
        width: Dimensions.get("window").width * 0.85,
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
    },
    summary: {
        marginTop: 20,
        alignItems: 'center',
    },
});
