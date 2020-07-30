import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Theme
import { lightThemeColors, defaultStyles } from '../themes';

interface HeaderProps {
    title: string;
};

const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={[defaultStyles.titleText, styles.headerTitle]}>{title}</Text>
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
    },
});
