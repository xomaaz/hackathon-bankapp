import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card, Button, Title, Subheading, Divider, Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export default function AccountScreen() {
  const [showBalance, setShowBalance] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Title style={styles.headerTitle}>My Account</Title>

      {/* Account Card */}
      <Card style={styles.card} accessible accessibilityLabel="Account Details Card">
        <Card.Content>
          {/* Show/Hide Balance Toggle */}
          <View style={styles.cardHeader}>
            <Text
              style={styles.balanceToggle}
              accessibilityLabel={showBalance ? 'Hide Balance Button' : 'Show Balance Button'}
              accessibilityHint="Double-tap to toggle the visibility of your account balance"
              onPress={() => setShowBalance(!showBalance)}
            >
              {showBalance ? 'HIDE BALANCE' : 'SHOW BALANCE'}
            </Text>
          </View>

          {/* Balance Display */}
          <Text
            style={styles.balance}
            accessibilityLabel={`Account balance is ${
              showBalance ? 'PKR 1,223,944.00' : 'Hidden'
            }`}
          >
            {showBalance ? 'PKR 1,223,944.00' : '**** ****'}
          </Text>

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
              accessibilityLabel="Card holder name Syed Amin Ur Rehman"
            >
              Syed Amin Ur Rehman
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
          accessibilityLabel="Want someone to transfer money to you? Generate a QR code for them to scan using the button below"
        >
          Want someone to transfer money to you? Generate a QR code for them to scan using the button below:
        </Paragraph>
        <Button
          mode="contained"
          icon={() => <MaterialCommunityIcons name="qrcode" size={32} color="#FFF" />}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            console.log('Generate QR Code Pressed');
          }}
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
          onPress={() => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            console.log('Transactions Pressed');
          }}
        >
          Transactions
        </Button>
      </View>
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
  headerTitle: {
    fontSize: 24,
    fontFamily: 'Montserrat-Bold',
    color: '#008080',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#2C2C2C', // Dark Grey
    width: '100%',
    borderRadius: 16,
    elevation: 4,
    paddingVertical: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  balanceToggle: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    color: '#008080',
    backgroundColor: '#E0F7F9', // Light teal background
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    textAlign: 'center',
    elevation: 2,
  },
  balance: {
    fontSize: 28,
    fontFamily: 'Montserrat-Bold',
    color: '#00BFA5', // Light teal
    textAlign: 'center',
    marginBottom: 8,
  },
  iban: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#00BFA5', // Light teal
    textAlign: 'center',
    marginBottom: 8,
  },
  cardNumber: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#00BFA5', // Light teal
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
    marginVertical: 20,
    backgroundColor: '#D3D3D3',
    height: 2,
  },
  qrSection: {
    alignItems: 'center',
    marginBottom: 10,
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
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#008080',
    elevation: 3,
  },
  buttonContent: {
    height: '100%', // Ensures ripple covers the whole button
    width: '100%',
  },
  buttonLabel: {
    fontSize: 20.5,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});
