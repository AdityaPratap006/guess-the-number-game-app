import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

// Components
import Card from './Card';
import NumberContainer from './NumberContainer';

// Theme
import { defaultStyles } from '../themes';

interface RoundListProp {
    list: number[];
};

const RoundList = ({ list }: RoundListProp) => {
    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={list}
            keyExtractor={(item) => (Date.now() * item).toString()}
            renderItem={({ item, index }) => (
                <Card style={styles.card}>
                    <Text style={defaultStyles.bodyText}>Round: {list.length - index}</Text>
                    <NumberContainer
                        number={item}
                    />
                </Card>
            )}
        />
    );
};

export default RoundList;

const styles = StyleSheet.create({
    list: {
        width: '100%',
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    card: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
