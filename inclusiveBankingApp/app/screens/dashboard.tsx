import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { height: screenHeight } = Dimensions.get('window');

export default function DashboardScreen({ navigation }: { navigation: any }) {
    const personName = "Jassim Saleh"; // Replace with dynamic name if needed

    return (
        <View style={styles.container}>
            {/* Welcome Section */}
            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>Welcome,</Text>
                <Text style={styles.nameText}>{personName}</Text>
            </View>

            {/* Main Content */}
            <View style={styles.content}>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="account" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        console.log('Account');
                    }}
                >
                    Account
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="swap-horizontal" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        navigation.navigate('TransferMoney');
                    }}
                >
                    Funds Transfer
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="file-document" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        console.log('Bill Payment');
                    }}
                >
                    Bill Payment
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="cog" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        console.log('Settings');
                    }}
                >
                    Settings
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="logout" size={32} color="#FFF" />}
                    style={[styles.button, styles.logoutButton]}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                        navigation.navigate('Welcome');
                    }}
                >
                    Logout
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    welcomeContainer: {
        width: '95%',
        height: screenHeight * 0.2,
        backgroundColor: '#004d99',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        elevation: 5,
        marginHorizontal: '2%',
    },
    welcomeText: {
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
    },
    nameText: {
        fontSize: 36,
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-evenly',
    },
    button: {
        width: '100%',
        height: 80,
        marginVertical: 10,
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#008080',
        elevation: 3,
    },
    buttonContent: {
        height: '100%', // Ensures ripple covers the whole button
        width: '100%',
    },
    buttonLabel: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
    },
    logoutButton: {
        backgroundColor: '#D32F2F',
    },
});

// export default DashboardScreen;
