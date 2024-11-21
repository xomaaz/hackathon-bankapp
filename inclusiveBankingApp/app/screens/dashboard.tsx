import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBarImage from '../components/headerBarImage';

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderBarImage imageSource={require('../../assets/images/headerBarLogo.png')} />
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
