import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

// Import all screens from the screens directory
import WelcomeScreen from '../screens/welcome';
// import LoginScreen from '../screens/login';
// import DashboardScreen from '../screens/dashboard';
// import CheckBalanceScreen from '../screens/checkBalance';
import TransferMoneyScreen1 from '../screens/transferMoney1';
// import TransactionHistoryScreen from '../screens/transactionHistory';
// import PayBillsScreen from '../screens/payBills';
// import RegisterScreen from '../screens/register';
// import SettingsScreen from '../screens/settings';
// import HelpScreen from '../screens/help';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="TransferMoney1"
                screenOptions={{
                    animation: 'slide_from_right', // Smooth animations for transitions
                }}
            >
                <Stack.Screen 
                    name="Welcome" 
                    component={WelcomeScreen} 
                    options={{ headerShown: false }} // Completely remove the header
                />

                <Stack.Screen
                    name="TransferMoney1"
                    component={TransferMoneyScreen1}
                    options={{ title: 'Transfer Money', headerShown: false }}
                />

                {/* <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ title: 'Dashboard' }} />
                <Stack.Screen name="CheckBalance" component={CheckBalanceScreen} options={{ title: 'Check Balance' }} />
                <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} options={{ title: 'Transaction History' }} />
                <Stack.Screen name="PayBills" component={PayBillsScreen} options={{ title: 'Pay Bills' }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
                <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
                <Stack.Screen name="Help" component={HelpScreen} options={{ title: 'Help & Support' }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;