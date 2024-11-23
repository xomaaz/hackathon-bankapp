import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native';
import { Button, Title, Divider, Card, Subheading, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import QRCode from 'react-native-qrcode-svg';


const { height: screenHeight } = Dimensions.get('window');

export default function TransferMoneyScreen({ navigation }: { navigation: any }) {
    const [showQRCode, setShowQRCode] = useState(false);

    const handleQRCode = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setShowQRCode(true);
    };

    const closeQRCode = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setShowQRCode(false);
    };

    // Generate QR code data (using IBAN in this case)
    const qrData = 'PK86FAYS0000001123456702';




    return (
        <View style={styles.container}>
            {/* Title Section */}
            <View style={styles.titleContainer}>
                <Title style={styles.titleText}>Transfer Money</Title>
            </View>

            {/* Send Money Section */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Send Money</Text>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="account-multiple" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        navigation.navigate('Beneficiaries');
                    }}
                    accessibilityLabel="Select from existing Beneficiaries"
                // accessibilityHint="Login using your 4-digit PIN"
                >
                    Beneficiaries
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="bank-transfer" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        navigation.navigate('AccountTransfer');
                    }}
                    accessibilityLabel="Transfer to a new account"
                >
                    Account Transfer
                </Button>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="send" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        navigation.navigate('AccountTransfer');
                    }}
                    accessibilityLabel="Transfer using Raast"
                >
                    Raast Transfer
                </Button>
            </View>




            {/* Receive Money Section */}
            <View style={styles.section}>
                <Divider style={styles.divider} />
                <Text style={[styles.sectionTitle, styles.receiveMoneyTitle]}>Receive Money</Text>
                <Button
                    mode="contained"
                    icon={() => <MaterialCommunityIcons name="qrcode" size={32} color="#FFF" />}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                    onPress={() => {
                        // Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        handleQRCode();
                    }}
                >
                    Share Account QR Code
                </Button>
            </View>

            {/* QR Code Modal */}
            <Modal
                visible={showQRCode}
                transparent={true}
                animationType="fade"
                onRequestClose={closeQRCode}
            >
                <BlurView intensity={150} style={StyleSheet.absoluteFill}>
                    <View style={styles.modalContainer}>
                        <View style={styles.qrCodeBox}>
                            <View style={styles.qrHeader}>
                                <Title style={styles.qrTitle}>Your Account QR Code</Title>
                                <Paragraph style={styles.qrSubtitle}>
                                    Scan to receive instant transfers
                                </Paragraph>
                            </View>

                            <View style={styles.qrWrapper}>
                                <QRCode
                                    value={qrData}
                                    size={200}
                                    color="#2C2C2C"
                                    backgroundColor="white"
                                />
                            </View>

                            <View style={styles.qrInfo}>
                                <MaterialCommunityIcons name="information" size={20} color="#666" />
                                <Text style={styles.qrInfoText}>
                                    Share this QR code to receive payments securely
                                </Text>
                            </View>

                            <Button
                                mode="contained"
                                style={styles.cancelButton}
                                labelStyle={styles.cancelButtonLabel}
                                onPress={closeQRCode}
                            >
                                Cancel
                            </Button>
                        </View>
                    </View>
                </BlurView>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    titleContainer: {
        width: '95%',
        height: screenHeight * 0.1,
        backgroundColor: '#F7F9FC',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        // elevation: 5,
        marginHorizontal: '2%',
    },
    titleText: {
        fontSize: 30,
        color: '#004d4d',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.1)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        fontFamily: 'Montserrat-Bold',
        // color: '#008080',
    },
    section: {
        flex: 1,
        padding: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginBottom: 15,
    },
    receiveMoneyTitle: {
        marginTop: 10, // Add spacing above Receive Money title
    },
    button: {
        width: '100%',
        height: 80,
        justifyContent: 'center',
        borderRadius: 16,
        backgroundColor: '#008080',
        elevation: 3,
        marginBottom: 15,
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
    divider: {
        marginVertical: 20,
        backgroundColor: '#D3D3D3',
        height: 2,
    },


    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    qrCodeBox: {
        backgroundColor: '#2C2C2C',
        borderRadius: 24,
        padding: 24,
        width: '90%',
        maxWidth: 400,
        alignItems: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
    },
    qrHeader: {
        alignItems: 'center',
        marginBottom: 24,
    },
    qrTitle: {
        fontSize: 23.5,
        fontFamily: 'Montserrat-Bold',
        color: '#00BFA5',
        marginBottom: 8,
    },
    qrSubtitle: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#ffff',
        textAlign: 'center',
    },
    qrWrapper: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginBottom: 24,
    },
    qrInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 5,
        borderRadius: 12,
        marginBottom: 24,
        maxWidth: '90%',
    },
    qrInfoText: {
        marginLeft: 8,
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        color: '#666',
        flex: 1,
    },
    cancelButton: {
        backgroundColor: '#FF3B30',
        width: '100%',
        borderRadius: 12,
        elevation: 2,
    },
    cancelButtonLabel: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        paddingVertical: 4,
    },
});
