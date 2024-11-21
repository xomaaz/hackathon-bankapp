import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import HeaderBarImage from '../components/headerBarImage';
import theme from '../constants/theme';

const { height: screenHeight } = Dimensions.get('window');

const DashboardScreen = () => {
    const personName = "John Doe"; // Replace with dynamic name if needed

    return (
        <View style={styles.container}>
            {/* Header with Image */}
            <HeaderBarImage imageSource={require('../../assets/images/headerBarLogo.png')} />

            {/* New Container Below Header */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.nameText}>{personName}</Text>
            </View>

            {/* Main Content */}
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
    welcomeContainer: {
        width: '100%',
        height: screenHeight * 0.2, // 20% of screen height
        backgroundColor: theme.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, // Symmetrical padding
    },
    welcomeText: {
        fontSize: 18,
        color: '#FFF',
        marginBottom: 5,
    },
    nameText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DashboardScreen;
