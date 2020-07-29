import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

// Components
import Card from '../components/Card';

// Colors
import { lightThemeColors } from '../themes/colors';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <TextInput />
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
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
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
