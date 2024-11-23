import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

// Import all screens from the screens directory
import WelcomeScreen from '../screens/welcome';
import LoginScreen from '../screens/login';
import DashboardScreen from '../screens/dashboard';
import AccountScreen from '../screens/account';
import TransactionHistoryScreen from '../screens/transactionHistory';
// import DashboardScreen from '../screens/dashboard';
// import CheckBalanceScreen from '../screens/checkBalance';
import TransferMoneyScreen from '../screens/transferMoney';
import AccountTransferScreen from '../screens/AccountTransfer';
import TransferDetailsScreen from '../screens/TransferDetails';
import OTPScreen from '../screens/OTP';
import ConfirmationScreen from '../screens/confirmation';
// import TransactionHistoryScreen from '../screens/transactionHistory';
// import PayBillsScreen from '../screens/payBills';
// import SettingsScreen from '../screens/settings';
// import HelpScreen from '../screens/help';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Welcome"
                screenOptions={{
                    animation: 'slide_from_right', // Smooth animations for transitions
                }}
            >
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                    options={{ headerShown: false }} // Completely remove the header
                />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="TransferMoney" component={TransferMoneyScreen} options={{ title: 'Funds Transfer' }} />
                <Stack.Screen name="Account" component={AccountScreen} options={{ title: 'Account' }} />
                <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} options={{ title: 'Transaction History' }} />
                <Stack.Screen name="AccountTransfer" component={AccountTransferScreen} options={{ title: 'Account Transfer' }} />
                <Stack.Screen name="TransferDetails" component={TransferDetailsScreen} options={{ title: 'Transfer Funds Details' }} />
                <Stack.Screen name="OTP" component={OTPScreen} options={{ title: 'Verification' }} />
                <Stack.Screen name="confirmation" component={ConfirmationScreen} options={{ title: 'Transaction Complete' }} />
                {/*
                <Stack.Screen name="CheckBalance" component={CheckBalanceScreen} options={{ title: 'Check Balance' }} />
                
                <Stack.Screen name="PayBills" component={PayBillsScreen} options={{ title: 'Pay Bills' }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
                <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
                <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help & Support' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;