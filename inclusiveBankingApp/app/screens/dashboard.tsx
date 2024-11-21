import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '../components/headerBar';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBar title="Dashboard" />
            <View style={styles.content}>
                <Text>Check Balance Screen</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashboardScreen;
