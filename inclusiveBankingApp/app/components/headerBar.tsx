import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../constants/theme';

interface HeaderBarProps {
  title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title }) => {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        height: 100,
        backgroundColor: theme.colors.primary + 'CC',
        justifyContent: 'center', // center content vertically
        alignItems: 'center', // center content horizontally
        paddingTop: 30, // move the text slightly down
    },
    headerText: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default HeaderBar;
