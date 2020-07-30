import React from 'react';
import { StyleSheet, Text, View, Button, Image, ImageStyle } from 'react-native';

// Theme
import { lightThemeColors, defaultStyles } from '../themes';

interface GameOverScreenProps {
    userChoice: number;
    totalRounds: number;
    onGameRestart: () => void;
};

const GameOverScreen = (props: GameOverScreenProps) => {
    return (
        <View style={styles.screen}>
            <Text style={[defaultStyles.titleText, styles.title]}>Game Over!</Text>
            <View style={styles.imageContainer}>
                <Image
                    fadeDuration={1000}
                    source={require('../../assets/success.png')}
                    // source={{
                    //     uri: 'https://www.mountainiq.com/wp-content/uploads/2019/01/matterhorn.jpg?x45723',
                    //     width: 400,
                    //     height: 400,
                    // }}
                    style={styles.image}
                    resizeMode="cover"
                />
            </View>
            <Text style={[defaultStyles.bodyText, styles.text]}>
                Your phone needed
                <Text style={styles.highlight}>{" " + props.totalRounds + " "}</Text>
                rounds to guess the number
                <Text style={styles.highlight}>{" " + props.userChoice}</Text>
            </Text>
            <Button
                title="PLAY AGAIN"
                onPress={props.onGameRestart}
                color={lightThemeColors.primary}
            />
        </View>
    );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 24,
        color: lightThemeColors.text,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 1000,
        borderWidth: 3,
        borderColor: lightThemeColors.accent,
        overflow: 'hidden',
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    } as ImageStyle,
    text: {
        fontSize: 18,
        color: lightThemeColors.text,
        textAlign: 'center',
        margin: 20,
    },
    highlight: {
        color: lightThemeColors.primary,
        fontSize: 24,
        fontFamily: 'open-sans-bold',
    },
});
