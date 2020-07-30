import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Colors
import { lightThemeColors } from '../themes/colors';

interface HeaderProps {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: lightThemeColors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    headerTitle: {
        color: lightThemeColors.appTitle,
        fontSize: 18,
        fontFamily: 'open-sans-bold',
    },
});
