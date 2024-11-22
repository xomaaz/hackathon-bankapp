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
        padding: 45,
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
    },
    headerText: {
        color: '#FFF', // White text color
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HeaderBar;
