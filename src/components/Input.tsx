import React from 'react';
import { StyleSheet, TextInput, StyleProp, TextStyle, TextInputAndroidProps, TextInputIOSProps, TextInputProps } from 'react-native';

// Colors
import { lightThemeColors } from '../themes/colors';

interface InputProps extends TextInputProps {
    style?: StyleProp<TextStyle>;
};

const Input = (props: InputProps) => {
    return (
        <TextInput
            {...props}
            style={[styles.input, props.style]}
        />
    );
};

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: lightThemeColors.text,
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
