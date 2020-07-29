import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

// Components
import Card from '../components/Card';

// Colors
import { lightThemeColors } from '../themes/colors';
import Input from '../components/Input';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input
                    style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="RESET"
                            onPress={() => { }}
                            color={lightThemeColors.accent}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="CONFIRM"
                            onPress={() => { }}
                            color={lightThemeColors.primary}
                        />
                    </View>
                </View>
            </Card>
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
