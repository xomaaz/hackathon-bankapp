import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function TransferDetailsScreen({ navigation }) {
    const [beneficiaryName, setBeneficiaryName] = useState('Ali Nisar Shah'); // Prefilled name
    const [accountNumber, setAccountNumber] = useState('1234567890'); // Prefilled account number
    const [amount, setAmount] = useState('');
    const [purpose, setPurpose] = useState('');
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const handleTransfer = () => {
        // Show confirmation modal
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        setShowConfirmModal(false);
        // haptic feedback
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
        console.log("Transfer confirmed");
        navigation.navigate('OTP');
    };

    const handleCancel = () => {
        setShowConfirmModal(false);
        // haptic feedback
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        console.log("Transfer canceled");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Transfer Details</Text>

            {/* Beneficiary Name */}
            <Text style={styles.label}>Sending To</Text>
            <TextInput
                style={styles.input}
                value={beneficiaryName}
                editable={false} // Prefilled, not editable
            />

            {/* Account Number */}
            <Text style={styles.label}>Account Number</Text>
            <TextInput
                style={styles.input}
                value={accountNumber}
                editable={false} // Prefilled, not editable
            />

            {/* Amount */}
            <Text style={styles.label}>Amount</Text>
            <TextInput
                style={styles.input}
                value={amount}
                onChangeText={setAmount}
                placeholder="Enter amount"
                keyboardType="numeric"
            />

            {/* Purpose */}
            <Text style={styles.label}>Purpose</Text>
            <TextInput
                style={styles.input}
                value={purpose}
                onChangeText={setPurpose}
                placeholder="Enter purpose"
            />

            {/* Transfer Button */}
            <TouchableOpacity
                style={[
                    styles.transferButton,
                    { backgroundColor: amount ? '#4CAF50' : '#CCC' }, // Disable style if no amount
                ]}
                onPress={handleTransfer}
                disabled={!amount} // Disable button if no amount is entered
            >
                <Text style={styles.buttonText}>Transfer</Text>
            </TouchableOpacity>

            {/* Confirmation Modal */}
            <Modal
                visible={showConfirmModal}
                transparent
                animationType="fade"
                onRequestClose={handleCancel}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalText}>
                            Send{' '}
                            <Text style={styles.amountText}>{amount || '...'}</Text>
                            {' '}to {beneficiaryName}?
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                                <Text style={styles.buttonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
        padding: 20,
        justifyContent: 'center',
    },
    header: {
        fontSize: 32, // Larger font size
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    label: {
        fontSize: 26, // Larger font size for labels
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    input: {
        fontSize: 24, // Larger font size for input fields
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 10,
        padding: 14,
        marginBottom: 20,
        color: '#333',
        backgroundColor: '#FFF',
    },
    transferButton: {
        paddingVertical: 20, // Increase padding for accessibility
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        fontSize: 24, // Larger font size for button text
        fontWeight: 'bold',
        color: '#FFF',
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '85%',
        backgroundColor: '#FFF',
        borderRadius: 12,
        padding: 30,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 30, // Larger font size for modal text
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    amountText: {
        color: '#007BFF', // Different color for amount
        fontWeight: 'bold',
        fontSize: 30, // Increase font size for highlighted amount
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#FF5A5F',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginRight: 10,
    },
    confirmButton: {
        flex: 1,
        backgroundColor: '#4CAF50',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 10,
    },
});
