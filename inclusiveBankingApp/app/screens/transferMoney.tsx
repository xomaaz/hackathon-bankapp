import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button, Title, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const { height: screenHeight } = Dimensions.get('window');

export default function TransferMoneyScreen({ navigation }: { navigation: any }) {
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
                >
                    RAAST Transfer
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
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        console.log('Share Account QR Code');
                    }}
                >
                    Share Account QR Code
                </Button>
            </View>
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
        fontFamily: 'Montserrat-Bold',
        color: '#008080',
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
});
