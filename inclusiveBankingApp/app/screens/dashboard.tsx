import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import HeaderBarImage from '../components/headerBarImage';
import theme from '../constants/theme';
import { Button } from 'react-native-paper'; 

const { height: screenHeight } = Dimensions.get('window');

const DashboardScreen = () => {
    const personName = "John Doe"; // Replace with dynamic name if needed

    return (
        <View style={styles.container}>
            {/* Header with Image */}
            <HeaderBarImage imageSource={require('../../assets/images/headerBarLogo.png')} personName={personName} />

            {/* New Container Below Header */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome</Text>
                <Text style={styles.nameText}>{personName}</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Transactions')}>
                    Transactions
                </Button>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Bill Payment')}>
                    Bill Payment
                </Button>
                <Button mode="contained" style={styles.button} onPress={() => console.log('History')}>
                    History
                </Button>
                <Button mode="contained" style={styles.button} onPress={() => console.log('Help and Settings')}>
                    Help & Settings Preferences
                </Button>
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
        width: '100%',
        padding: 10, // padding on left and right
        paddingVertical: 10,
    },
    button: {
        width: '100%', // make the button span the full width
        marginVertical: 10, // space between buttons
    },
});

export default DashboardScreen;
