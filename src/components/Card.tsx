import React from 'react';
import { StyleSheet, View, StyleProp, ViewStyle } from 'react-native';

interface CardProps {
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
};

const Card = (props: CardProps) => {
    return (
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10,
        padding: 20,
    }
});
