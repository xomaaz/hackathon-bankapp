// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';
// import { Button, useTheme } from 'react-native-paper';
// import * as Haptics from 'expo-haptics';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const { height: screenHeight } = Dimensions.get('window');

// export default function DashboardScreen({ navigation }: { navigation: any }) {
//     const personName = "Amin ur Rehman"; // Replace with dynamic name if needed

//     return (
//         <View style={styles.container}>
//             {/* Welcome Section */}
//             <View style={styles.welcomeContainer} accessibilityLabel="Welcome Amin ur Rehman. Select From options below">
//                 <Text style={styles.welcomeText} importantForAccessibility='no'>Welcome,</Text>
//                 <Text style={styles.nameText} importantForAccessibility="no">{personName}</Text>
//             </View>

//             {/* Main Content */}
//             <View style={styles.content}>
//                 <Button
//                     mode="contained"
//                     icon={() => <MaterialCommunityIcons name="account" size={32} color="#FFF" />}
//                     style={styles.button}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={styles.buttonLabel}
//                     onPress={() => {
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
//                         navigation.navigate('Account');
//                     }}
//                     accessibilityLabel='View Account Details'
//                 >
//                     Account
//                 </Button>
//                 <Button
//                     mode="contained"
//                     icon={() => <MaterialCommunityIcons name="swap-horizontal" size={32} color="#FFF" />}
//                     style={styles.button}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={styles.buttonLabel}
//                     onPress={() => {
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
//                         navigation.navigate('TransferMoney');
//                     }}
//                 >
//                     Funds Transfer
//                 </Button>
//                 <Button
//                     mode="contained"
//                     icon={() => <MaterialCommunityIcons name="file-document" size={32} color="#FFF" />}
//                     style={styles.button}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={styles.buttonLabel}
//                     onPress={() => {
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
//                         console.log('Bill Payment');
//                     }}
//                 >
//                     Bill Payment
//                 </Button>
//                 <Button
//                     mode="contained"
//                     icon={() => <MaterialCommunityIcons name="cog" size={32} color="#FFF" />}
//                     style={styles.button}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={styles.buttonLabel}
//                     onPress={() => {
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
//                         console.log('Settings');
//                     }}
//                 >
//                     Settings
//                 </Button>
//                 <Button
//                     mode="contained"
//                     icon={() => <MaterialCommunityIcons name="logout" size={32} color="#FFF" />}
//                     style={[styles.button, styles.logoutButton]}
//                     contentStyle={styles.buttonContent}
//                     labelStyle={styles.buttonLabel}
//                     onPress={() => {
//                         Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
//                         navigation.navigate('Welcome');
//                     }}
//                 >
//                     Logout
//                 </Button>
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#F7F9FC',
//     },
//     welcomeContainer: {
//         width: '95%',
//         height: screenHeight * 0.2,
//         backgroundColor: '#2C2C2C',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderBottomLeftRadius: 30,
//         borderBottomRightRadius: 30,
//         elevation: 5,
//         marginHorizontal: '2%',
//     },
//     welcomeText: {
//         fontSize: 20,
//         color: '#00BFA5',
//         fontFamily: 'Montserrat-Regular',
//         marginBottom: 5,
//     },
//     nameText: {
//         fontSize: 36,
//         fontFamily: 'Montserrat-Bold',
//         color: '#00BFA5',
//     },
//     content: {
//         flex: 1,
//         padding: 20,
//         justifyContent: 'space-evenly',
//     },
//     button: {
//         width: '100%',
//         height: 80,
//         marginVertical: 10,
//         justifyContent: 'center',
//         borderRadius: 16,
//         backgroundColor: '#008080',
//         elevation: 3,
//     },
//     buttonContent: {
//         height: '100%', // Ensures ripple covers the whole button
//         width: '100%',
//     },
//     buttonLabel: {
//         fontSize: 20.5,
//         fontFamily: 'Montserrat-SemiBold',
//         color: '#FFF',
//     },
//     logoutButton: {
//         backgroundColor: '#D32F2F',
//     },
// });

// // export default DashboardScreen;



import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, AccessibilityInfo } from 'react-native';
import { Button, Card, Surface, useTheme, Avatar, Divider } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as Speech from 'expo-speech';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function DashboardScreen({ navigation }: { navigation: any }) {
    const personName = "Amin ur Rehman";
    const lastLogin = "23 Nov, 2024 • 10:30 AM";

    useEffect(() => {
        // Announce welcome message when screen loads
        const welcomeMessage = `Welcome back, ${personName}`;
        Speech.speak(welcomeMessage, {
            language: 'en',
            pitch: 1.0,
            rate: 0.9
        });
    }, []);

    const quickStats = [
        {
            icon: 'trending-up',
            label: 'Income',
            value: '+PKR 2,450.00',
            trend: '+15%',
            positive: true,
            accessibilityLabel: 'Income increased by 2,450 dollars, up 15 percent from last month'
        },
        {
            icon: 'trending-down',
            label: 'Spending',
            value: '-PKR 1,832.00',
            trend: '-8%',
            positive: false,
            accessibilityLabel: 'Spending decreased by 1,832 dollars, down 8 percent from last month'
        },
    ];

    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
            accessibilityRole="scrollview"
            accessibilityLabel="Dashboard main content"
        >
            <LinearGradient
                colors={['#1a535c', '#4ecdc4']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.headerGradient}
            >
                <View
                    style={styles.headerContent}
                    accessible={false}
                // accessibilityRole="header"
                // accessibilityLabel={`Welcome back ${personName}. Last login: ${lastLogin}`}
                >
                    <View style={styles.userInfoContainer}>
                        <Avatar.Text
                            size={70}
                            label="AR"
                            style={styles.avatar}
                            labelStyle={styles.avatarLabel}
                        />
                        <View style={styles.userTextContainer}>
                            <Text style={styles.welcomeText}>Welcome back,</Text>
                            <Text style={styles.nameText}>{personName}</Text>
                            <Text style={styles.lastLoginText}>Last login: {lastLogin}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>

            <Surface
                style={styles.balanceCard}
                accessible={true}
                accessibilityRole="summary"
                accessibilityLabel="Total balance: 24,680 dollars in savings account ending with 4523"
            >
                <View style={styles.balanceHeader}>
                    <Text style={styles.balanceLabel}>Total Balance</Text>
                    <MaterialCommunityIcons
                        name="eye-outline"
                        size={32}
                        color="#008080"
                        accessibilityLabel="Toggle balance visibility"
                    />
                </View>
                <Text style={styles.balanceAmount}>PKR 24,680.00</Text>
                <View style={styles.accountInfo}>
                    <Text style={styles.accountNumber}>**** **** **** 4523</Text>
                    <Text style={styles.accountType}>Savings Account</Text>
                </View>
            </Surface>

            <View
                style={styles.quickStatsContainer}
                accessibilityRole="summary"
                accessible={true}
                accessibilityLabel="Quick statistics overview"
            >
                {quickStats.map((stat, index) => (
                    <Surface
                        key={index}
                        style={styles.statCard}
                        accessible={true}
                        accessibilityRole="text"
                        accessibilityLabel={stat.accessibilityLabel}
                    >
                        <MaterialCommunityIcons
                            name={stat.icon as any}
                            size={32}
                            color={stat.positive ? '#00BFA5' : '#FF5252'}
                        />
                        <Text style={styles.statLabel}>{stat.label}</Text>
                        <Text style={[styles.statValue, { color: stat.positive ? '#00BFA5' : '#FF5252' }]}>
                            {stat.value}
                        </Text>
                        <Text style={[styles.statTrend, { color: stat.positive ? '#00BFA5' : '#FF5252' }]}>
                            {stat.trend}
                        </Text>
                    </Surface>
                ))}
            </View>

            <Divider style={styles.divider} />

            <Text style={styles.sectionTitle}>Quick Actions</Text>
            <View style={styles.content}>
                {[
                    {
                        icon: 'account-circle-outline',
                        label: 'Account',
                        onPress: () => navigation.navigate('Account'),
                        accessibilityHint: 'Navigate to account details'
                    },
                    {
                        icon: 'bank-transfer',
                        label: 'Funds Transfer',
                        onPress: () => navigation.navigate('TransferMoney'),
                        accessibilityHint: 'Start a new funds transfer'
                    },
                    {
                        icon: 'receipt',
                        label: 'Bill Payment',
                        onPress: () => console.log('Bill Payment'),
                        accessibilityHint: 'Pay your bills'
                    },
                    {
                        icon: 'cog-outline',
                        label: 'Settings',
                        onPress: () => console.log('Settings'),
                        accessibilityHint: 'Adjust app settings'
                    },
                    {
                        icon: 'logout-variant',
                        label: 'Logout',
                        onPress: () => navigation.navigate('Welcome'),
                        accessibilityHint: 'Log out of your account',
                        isLogout: true
                    }
                ].map((action, index) => (
                    <Button
                        key={index}
                        mode="contained"
                        icon={() => (
                            <MaterialCommunityIcons
                                name={action.icon as any}
                                size={32}
                                color="#FFF"
                            />
                        )}
                        style={[styles.button, action.isLogout && styles.logoutButton]}
                        contentStyle={styles.buttonContent}
                        labelStyle={styles.buttonLabel}
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                            action.onPress();
                        }}
                        accessible={true}
                        accessibilityRole="button"
                        accessibilityLabel={action.label}
                        accessibilityHint={action.accessibilityHint}
                    >
                        {action.label}
                    </Button>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
    },
    headerGradient: {
        paddingTop: 60,
        paddingBottom: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    headerContent: {
        paddingHorizontal: 20,
    },
    userInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        backgroundColor: '#fff',
    },
    avatarLabel: {
        color: '#1a535c',
        fontFamily: 'Montserrat-Bold',
        fontSize: 24, // Increased font size
    },
    userTextContainer: {
        marginLeft: 15,
    },
    welcomeText: {
        fontSize: 20, // Increased from 16
        color: '#E0F2F1',
        fontFamily: 'Montserrat-Regular',
    },
    nameText: {
        fontSize: 28, // Increased from 24
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        marginVertical: 4,
    },
    lastLoginText: {
        fontSize: 16, // Increased from 12
        color: '#E0F2F1',
        fontFamily: 'Montserrat-Regular',
    },
    balanceCard: {
        margin: 20,
        padding: 24, // Increased padding
        borderRadius: 20,
        backgroundColor: '#FFF',
        elevation: 4,
    },
    balanceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    balanceLabel: {
        fontSize: 20, // Increased from 16
        color: '#444', // Darker color for better contrast
        fontFamily: 'Montserrat-Medium',
    },
    balanceAmount: {
        fontSize: 42, // Increased from 36
        fontFamily: 'Montserrat-Bold',
        color: '#1a535c',
        marginVertical: 10,
    },
    accountInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    accountNumber: {
        fontSize: 18, // Increased from 14
        color: '#444', // Darker color for better contrast
        fontFamily: 'Montserrat-Medium',
    },
    accountType: {
        fontSize: 18, // Increased from 14
        color: '#008080',
        fontFamily: 'Montserrat-SemiBold',
    },
    quickStatsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    statCard: {
        width: '48%',
        padding: 20, // Increased padding
        borderRadius: 15,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    statLabel: {
        fontSize: 18, // Increased from 14
        color: '#444', // Darker color for better contrast
        fontFamily: 'Montserrat-Medium',
        marginTop: 8,
    },
    statValue: {
        fontSize: 22, // Increased from 18
        fontFamily: 'Montserrat-Bold',
        marginTop: 4,
    },
    statTrend: {
        fontSize: 18, // Increased from 14
        fontFamily: 'Montserrat-SemiBold',
        marginTop: 4,
    },
    divider: {
        marginVertical: 20,
        backgroundColor: '#E0E0E0',
        height: 2, // Increased visibility
    },
    sectionTitle: {
        fontSize: 24, // Increased from 20
        fontFamily: 'Montserrat-Bold',
        color: '#1a535c',
        marginLeft: 20,
        marginBottom: 15,
    },
    content: {
        padding: 20,
        paddingTop: 0,
    },
    button: {
        width: '100%',
        height: 90, // Increased from 80
        marginVertical: 8,
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#008080',
        elevation: 3,
    },
    buttonContent: {
        height: '100%',
        width: '100%',
    },
    buttonLabel: {
        fontSize: 22, // Increased from 18
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
    },
    logoutButton: {
        backgroundColor: '#FF5252',
        marginTop: 16,
    },
});