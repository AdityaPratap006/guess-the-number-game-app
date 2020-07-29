import React from 'react';
import { StyleSheet, Text, View, StyleProp, TextStyle, ViewStyle } from 'react-native';

// Colors
import { lightThemeColors } from '../themes/colors';

interface NumberContainerProps {
    number?: number | string;
    containerStyle?: StyleProp<ViewStyle>;
    numberStyle?: StyleProp<TextStyle>; 
};

const NumberContainer = (props: NumberContainerProps) => {
    return (
        <View style={[styles.container, props.containerStyle]}>
            <Text style={[styles.number, props.numberStyle]}>{props.number}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: lightThemeColors.accent,
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: lightThemeColors.accent,
        fontSize: 22,
    }
});
