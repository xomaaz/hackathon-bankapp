import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Accelerometer } from 'expo-sensors';
import * as Haptics from 'expo-haptics';
import { navigationRef, navigate } from './navigationRef'; // Import the navigationRef

// Import all screens
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import DashboardScreen from '../screens/dashboard';
import AccountScreen from '../screens/account';
import TransactionHistoryScreen from '../screens/transactionHistory';
import HelpScreen from '../screens/help';
import TransferMoneyScreen from '../screens/transferMoney';
import AccountTransferScreen from '../screens/AccountTransfer';
import TransferDetailsScreen from '../screens/TransferDetails';
import OTPScreen from '../screens/OTP';
import ConfirmationScreen from '../screens/confirmation';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    // Detect shake motion
    const detectShake = (data: { x: number; y: number; z: number }) => {
        const { x, y, z } = data;
        const totalForce = Math.sqrt(x * x + y * y + z * z);

        // Adjust threshold to detect shake
        if (totalForce > 1.8) {
            // Trigger vibration and navigate to HelpScreen
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            navigate('Help'); // Use the global navigate function
        }
    };

    useEffect(() => {
        // Start accelerometer updates
        Accelerometer.setUpdateInterval(300); // Update every 300ms
        const subscription = Accelerometer.addListener(detectShake);

        return () => {
            // Cleanup accelerometer updates
            subscription && subscription.remove();
        };
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    animation: 'slide_from_right', // Smooth animations for transitions
                }}
            >
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="TransferMoney" component={TransferMoneyScreen} options={{ title: 'Funds Transfer' }} />
                <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
                <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} options={{ title: 'Transaction History' }} />
                <Stack.Screen name="AccountTransfer" component={AccountTransferScreen} options={{ title: 'Account Transfer' }} />
                <Stack.Screen name="TransferDetails" component={TransferDetailsScreen} options={{ title: 'Transfer Funds Details' }} />
                <Stack.Screen name="OTP" component={OTPScreen} options={{ title: 'Verification' }} />
                <Stack.Screen name="confirmation" component={ConfirmationScreen} options={{ title: 'Receipt' }} />
                <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help & Support' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
