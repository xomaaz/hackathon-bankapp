import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, Pressable, Dimensions } from 'react-native';
import { Card, Button, Title, Subheading, Divider, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { BlurView } from 'expo-blur';
import QRCode from 'react-native-qrcode-svg';

export default function AccountScreen({ navigation }: { navigation: any }) {
  const [showBalance, setShowBalance] = useState(false);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleToggleBalance = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setShowBalance(!showBalance);
  };

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
      {/* Header */}
      <View style={styles.headerContainer}>
        <Title style={styles.headerTitle}>My Account</Title>
      </View>

      {/* Account Card */}
      <Card style={styles.card} accessible accessibilityLabel="Account Details Card">
        <Card.Content>
          {/* Show/Hide Balance Toggle */}
          <View style={styles.cardHeader}>
            <Text
              style={styles.balanceToggle}
              accessibilityLabel={showBalance ? 'Hide Balance Button' : 'Show Balance Button'}
              accessibilityHint="Double-tap to toggle the visibility of your account balance"
              onPress={handleToggleBalance}
            >
              {showBalance ? 'HIDE BALANCE' : 'SHOW BALANCE'}
            </Text>
          </View>

          {/* Balance Display */}
          <View style={styles.cardHeader} >
            <Text style={styles.balance} accessibilityLabel={showBalance ? 'Your balance is PKR 10,250.00' : 'Balance hidden. Tap show balance to reveal'}>
              {showBalance ? 'PKR 10,250.00' : '**** ****'}
            </Text>
          </View>

          {/* IBAN */}
          <Subheading
            style={styles.iban}
            accessibilityLabel="IBAN is PK86FAYS0000001123456702"
          >
            IBAN: PK86FAYS0000001123456702
          </Subheading>

          {/* Account Number */}
          <Subheading
            style={styles.cardNumber}
            accessibilityLabel="Account Number ending with 0000"
          >
            Account: **** **** **** 0000
          </Subheading>

          {/* Card Footer */}
          <View style={styles.cardFooter}>
            <Text
              style={styles.cardHolder}
              accessibilityLabel="Card holder name Yousuf Hussain"
            >
              Yousuf Hussain
            </Text>
            <Text
              style={styles.expiryDate}
              accessibilityLabel="Card expiry date August 2028"
            >
              08/28
            </Text>
          </View>
        </Card.Content>
      </Card>

      {/* Divider */}
      <Divider style={styles.divider} />

      {/* QR Code Section */}
      <View style={styles.qrSection}>
        <Paragraph
          style={styles.qrInfo}
          accessibilityLabel="Share your QR code for quick transfers"
        >
          Share your QR code for quick transfers:
        </Paragraph>
        <Button
          mode="contained"
          icon={() => <MaterialCommunityIcons name="qrcode" size={32} color="#FFF" />}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={handleQRCode}
        >
          Generate QR Code
        </Button>
      </View>

      {/* Divider */}
      <Divider style={styles.divider} />

      {/* Transactions Button */}
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          icon={() => <MaterialCommunityIcons name="swap-horizontal" size={32} color="#FFF" />}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          accessibilityLabel={"View Transaction History"}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            navigation.navigate('TransactionHistory');
          }}
        >
          Transactions
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
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerContainer: {
    backgroundColor: '#E8E8E8',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
  },
  headerTitle: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    color: '#004d4d',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 1,
  },
  card: {
    backgroundColor: '#2C2C2C',
    width: '100%',
    borderRadius: 16,
    elevation: 4,
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8, // Reduced spacing for balance toggle
  },
  balanceToggle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#008080',
    backgroundColor: '#E0F7F9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    textAlign: 'center',
    elevation: 2,
  },
  balance: {
    fontSize: 30,
    fontFamily: 'Montserrat-Bold',
    color: '#00BFA5',
    textAlign: 'center',
  },
  iban: {
    fontSize: 16,
    fontFamily: 'Montserrat-ExtraLight',
    color: '#00BFA5',
    textAlign: 'center',
    marginBottom: 10, // Slightly tighter layout
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: 'Montserrat-ExtraLight',
    color: '#00BFA5',
    textAlign: 'center',
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cardHolder: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
  },
  expiryDate: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
  },
  divider: {
    marginVertical: 20, // Even spacing above and below
    backgroundColor: '#D3D3D3',
    height: 2,
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 3, // Balanced spacing
  },
  qrInfo: {
    fontSize: 16,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    width: '100%',
    height: 80,
    marginVertical: 15, // Slightly increased spacing between buttons
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
    fontSize: 20.5,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
  },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 20, // Proper space below Transactions button
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
