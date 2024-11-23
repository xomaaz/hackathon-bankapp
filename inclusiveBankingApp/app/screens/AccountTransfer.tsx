import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Modal, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

const { height: screenHeight } = Dimensions.get('window');

export default function AccountTransferScreen({ navigation }) {
    const [scanned, setScanned] = useState(false);
    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
    const [permission, requestPermission] = useCameraPermissions();
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [confirmData, setConfirmData] = useState({ name: '', accountNumber: '' });

    const openConfirmModal = (name, accountNumber) => {
        setConfirmData({ name, accountNumber });
        setShowConfirmModal(true);
    };

    const handleConfirm = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
        setShowConfirmModal(false);
        navigation.navigate('TransferDetails', confirmData);
    };

    const handleCancel = () => {
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        setScanned(false);
        setShowConfirmModal(false);
    };

    const handleSelectFromGallery = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            const name = 'Ali Nisar Shah';
            const accountNumber = '1234567890';
            openConfirmModal(name, accountNumber);
        }
    };

    return (
        <View style={styles.container}>
            {/* Camera Section */}
            <View style={styles.cameraContainer}>

                <CameraView

                />
                <CameraView
                    style={styles.camera}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr"],
                    }}
                >
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Scan QR Code</Text>
                    </View>
                </CameraView>
            </View>

            {/* Actions Section */}
            <View style={styles.actionsContainer}>
                <Button
                    mode="outlined"
                    style={styles.actionButton}
                    labelStyle={styles.actionLabel}
                    onPress={handleSelectFromGallery}
                >
                    Select QR Code from Gallery
                </Button>
                <Button
                    mode="contained"
                    style={styles.actionButton}
                    labelStyle={styles.actionLabel}
                    onPress={() => {
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                        navigation.navigate('TransferDetails');
                    }}
                >
                    Enter Details Manually
                </Button>
            </View>

            {/* Custom Confirm Modal */}
            <Modal
                visible={showConfirmModal}
                transparent
                animationType="fade"
                onRequestClose={() => setShowConfirmModal(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Confirm Transfer</Text>
                        <Text style={styles.modalDetailText}>Name:</Text>
                        <Text style={styles.modalText}>{confirmData.name}</Text>
                        <Text style={styles.modalDetailText}>Account Number:</Text>
                        <Text style={styles.modalText}>{confirmData.accountNumber}</Text>

                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity style={styles.modalButtonCancel} onPress={handleCancel}>
                                <Text style={styles.modalButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButtonConfirm} onPress={handleConfirm}>
                                <Text style={styles.modalButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F9FC',
    },
    cameraContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004d99',
        padding: 20,
    },
    overlayText: {
        fontSize: 24,
        fontFamily: 'Montserrat-Bold',
        color: '#333',
    },
    actionsContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    actionButton: {
        width: '100%',
        height: 60,
        justifyContent: 'center',
        borderRadius: 16,
    },
    actionLabel: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
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
    modalTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    modalDetailText: {
        fontSize: 25,
        fontWeight: '600',
        textAlign: 'center',
        color: '#444',
        marginTop: 10,
    },
    modalText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginVertical: 5,
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    modalButtonCancel: {
        flex: 1,
        backgroundColor: '#FF5A5F',
        borderRadius: 8,
        paddingVertical: 10,
        marginRight: 5,
        alignItems: 'center',
    },
    modalButtonConfirm: {
        flex: 1,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 10,
        marginLeft: 5,
        alignItems: 'center',
    },
    modalButtonText: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
});
