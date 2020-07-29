import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
        backgroundColor: '#9c27b0',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10,
    },
    headerTitle: {
        color: 'white',
        fontSize: 18,
    },
});
