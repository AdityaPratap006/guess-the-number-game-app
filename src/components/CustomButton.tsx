import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Theme
import { lightThemeColors } from '../themes';

interface CustomButtonProps {
    children: React.ReactNode; 
    onPress: () => void;
};

const CustomButton = ({ children, onPress }: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: lightThemeColors.primary,
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 1000,
    },
    buttonText: {
        color: lightThemeColors.appTitle,
        fontFamily: 'open-sans',
        fontSize: 18,
        textAlign: 'center',
    }
});
