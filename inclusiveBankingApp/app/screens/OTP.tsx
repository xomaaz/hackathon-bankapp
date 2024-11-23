import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function OTPScreen({ navigation }) {
    const [otp, setOtp] = useState('');

    const handleResend = () => {
        console.log('Resend OTP');
        // Logic for resending OTP goes here
    };

    const handleConfirm = () => {
        console.log('OTP Confirmed:', otp);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        navigation.navigate('confirmation');
        // Logic for confirming OTP goes here
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Verify</Text>

            <Text style={styles.message}>
                We sent you a 5 digit OTP to
            </Text>

            <Text style={styles.phoneNumber}>03******5261</Text>

            <Text style={styles.inputLabel}>Enter Your OTP Here</Text>

            <TextInput
                style={styles.otpInput}
                value={otp}
                onChangeText={setOtp}
                keyboardType="numeric"
                placeholder="12345"
                maxLength={5}
            />

            <Text style={styles.timerText}>10 Seconds</Text>

            <TouchableOpacity onPress={handleResend}>
                <Text style={styles.resendText}>
                    I didn’t receive the OTP? <Text style={styles.resendLink}>Resend</Text>
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004d99', // Darker background for contrast
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    header: {
        fontSize: 36, // Larger text size for header
        fontWeight: 'bold',
        color: '#ffffff',
        marginBottom: 30,
    },
    message: {
        fontSize: 24, // Larger text size for message
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    phoneNumber: {
        fontSize: 24, // Larger text size for phone number
        color: '#ffdd57', // Yellow for contrast against background
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    inputLabel: {
        fontSize: 22, // Larger text size for input label
        color: '#ffffff',
        marginBottom: 10,
        textAlign: 'center',
    },
    otpInput: {
        width: '80%',
        fontSize: 28, // Larger text for OTP input
        color: '#000',
        backgroundColor: '#ffffff',
        textAlign: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 20,
    },
    timerText: {
        fontSize: 22, // Larger text for timer
        color: '#ffdd57',
        marginBottom: 20,
    },
    resendText: {
        fontSize: 20, // Larger text for resend text
        color: '#ffffff',
        textAlign: 'center',
    },
    resendLink: {
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#ffdd57',
    },
    confirmButton: {
        width: '80%',
        backgroundColor: '#4CAF50', // Green color for confirm button
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 40,
    },
    confirmButtonText: {
        fontSize: 24, // Larger text for button
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
