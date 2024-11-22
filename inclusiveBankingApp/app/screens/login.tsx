import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    ImageBackground,
    TextInput,
    TouchableWithoutFeedback,
    Modal,
} from 'react-native';
import { Button } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import * as LocalAuthentication from 'expo-local-authentication';

export default function LoginScreen({ navigation }: { navigation: any }) {
    const [isPinVisible, setIsPinVisible] = useState(false);
    const [pin, setPin] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const showAlert = (message: string) => {
        setAlertMessage(message);
        setAlertVisible(true);
    };

    const handleBiometricLogin = async () => {
        const compatible = await LocalAuthentication.hasHardwareAsync();
        if (!compatible) {
            showAlert("Biometric not supported. Switching to PIN-based login.");
            setIsPinVisible(true);
            return;
        }

        const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
        if (!savedBiometrics) {
            showAlert("Biometric not set up. Switching to PIN-based login.");
            setIsPinVisible(true);
            return;
        }

        const result = await LocalAuthentication.authenticateAsync({
            promptMessage: "Login with Biometrics",
            fallbackLabel: "Use PIN",
        });

        if (result.success) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            navigation.navigate('Dashboard');
        } else {
            showAlert("Biometric authentication failed. Switching to PIN-based login.");
            setIsPinVisible(true);
        }
    };

    const handlePinLogin = () => {
        if (pin === '1234') {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            navigation.navigate('Dashboard');
        } else {
            Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
            showAlert("Invalid PIN. Please enter the correct 4-digit PIN.");
        }
    };

    useEffect(() => {
        handleBiometricLogin();
    }, []); // Runs only once when the component mounts

    return (
        <TouchableWithoutFeedback onPress={() => setAlertVisible(false)}>
            <ImageBackground
                source={require('../../assets/images/faysalBank.jpg')}
                style={styles.backgroundImage}
                imageStyle={{ opacity: 0.5 }}
            >
                <Modal
                    transparent
                    visible={alertVisible}
                    animationType="fade"
                    onRequestClose={() => setAlertVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setAlertVisible(false)}>
                        <View style={styles.alertOverlay}>
                            <View style={styles.alertBox}>
                                <Text style={styles.alertText}>{alertMessage}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/fbLogo.png')}
                        style={[styles.logo, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
                        resizeMode="contain"
                        accessible
                        accessibilityLabel="Faysal Bank Logo"
                    />
                </View>

                <View style={styles.welcomeTextContainer}>
                    <Text style={styles.welcomeText}>Login to Your Account</Text>
                </View>

                <View style={styles.buttonContainer}>
                    {!isPinVisible ? (
                        <Button
                            mode="contained"
                            onPress={handleBiometricLogin}
                            style={[styles.button, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
                            labelStyle={styles.buttonLabel}
                            contentStyle={styles.buttonContent}
                            accessibilityLabel="Biometric Login"
                            accessibilityHint="Login using your device's biometric authentication"
                        >
                            LOGIN WITH BIOMETRICS
                        </Button>
                    ) : (
                        <View style={styles.pinContainer}>
                            <TextInput
                                style={styles.pinInput}
                                keyboardType="numeric"
                                maxLength={4}
                                secureTextEntry
                                placeholder="Enter PIN"
                                value={pin}
                                onChangeText={setPin}
                            />
                            <Button
                                mode="contained"
                                onPress={handlePinLogin}
                                style={[styles.button, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
                                labelStyle={styles.buttonLabel}
                                contentStyle={styles.buttonContent}
                                accessibilityLabel="PIN Login"
                                accessibilityHint="Login using your 4-digit PIN"
                            >
                                LOGIN WITH PIN
                            </Button>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
        left: 50,
        alignItems: 'center',
    },
    logo: {
        width: 320,
        height: 100,
    },
    welcomeTextContainer: {
        marginTop: '-50%',
        paddingHorizontal: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 15,
        padding: 15,
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.9)',
    },
    welcomeText: {
        fontSize: 40,
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        color: '#004d4d',
        textShadowColor: 'rgba(255, 255, 255, 0.8)',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 2,
        letterSpacing: 0.5,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 80,
        width: '80%',
    },
    button: {
        backgroundColor: '#008080',
        borderRadius: 12,
        marginVertical: 10,
    },
    buttonLabel: {
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFFFFF',
    },
    buttonContent: {
        height: 80,
    },
    pinContainer: {
        alignItems: 'center',
    },
    pinInput: {
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#008080',
        borderRadius: 12,
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
    },
    alertOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    alertBox: {
        width: '80%',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    alertText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#333333',
    },
});
