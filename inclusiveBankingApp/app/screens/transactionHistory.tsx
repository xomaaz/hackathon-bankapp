import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Card, Title, Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const TransactionCard = ({ data }) => (
  <Card 
    style={styles.transactionCard}
    accessible
    accessibilityLabel={`Transaction: ${data.type} ${data.amount} on ${data.date}`}
  >
    <Card.Content style={styles.cardContent}>
      {/* Left section with icon */}
      <View style={styles.iconContainer}>
        <MaterialCommunityIcons 
          name={data.icon} 
          size={28} 
          color="#00BFA5"
        />
      </View>

      {/* Middle section with transaction details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.transactionType}>{data.type}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTime}>{data.date} • {data.time}</Text>
        </View>
        <Text style={styles.transactionId}>Transaction ID: {data.transactionId}</Text>
      </View>

      {/* Right section with amount and status */}
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>PKR {data.amount}</Text>
        {data.status && (
          <View style={[
            styles.statusBadge,
            { backgroundColor: data.status === 'Confirmed' ? '#E8F5E9' : '#FFEBEE' }
          ]}>
            <Text style={[
              styles.statusText,
              { color: data.status === 'Confirmed' ? '#2E7D32' : '#C62828' }
            ]}>
              {data.status}
            </Text>
          </View>
        )}
      </View>
    </Card.Content>
  </Card>
);

export default function TransactionHistory() {
  const [visible, setVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState('VISA ending with****3749');

  const transactions = [
    {
      type: 'Cash-in',
      description: 'From ABC Bank ATM',
      amount: '100.00',
      date: '17 Sep 2023',
      time: '10:34 AM',
      transactionId: '5689253784522',
      icon: 'cash-plus',
      status: 'Confirmed'
    },
    {
      type: 'Cashback from purchase',
      description: 'Purchase from Amazon.com',
      amount: '1.75',
      date: '16 Sep 2023',
      time: '06:08 PM',
      transactionId: '6857865534219',
      icon: 'cash-refund',
      status: 'Confirmed'
    },
    {
      type: 'Transfer to card',
      description: 'Inter-bank transfer',
      amount: '9,000.00',
      date: '16 Sep 2023',
      time: '11:29 AM',
      transactionId: '6589045554317',
      icon: 'credit-card-sync',
      status: 'Confirmed'
    },
    {
      type: 'Transfer to card',
      description: 'Not enough funds',
      amount: '9,267.00',
      date: '15 Sep 2023',
      time: '10:15 AM',
      transactionId: '6970674547285',
      icon: 'credit-card-remove',
      status: 'Cancelled'
    },
    {
      type: 'Cashback from purchase',
      description: 'Purchase from Books.com',
      amount: '3.21',
      date: '14 Sep 2023',
      time: '02:53 PM',
      transactionId: '7852359785421',
      icon: 'cash-refund',
      status: 'Confirmed'
    },
    {
      type: 'Transfer to card',
      description: 'Monthly transfer',
      amount: '70.00',
      date: '14 Sep 2023',
      time: '11:45 AM',
      transactionId: '7856321459874',
      icon: 'credit-card-sync',
      status: 'Confirmed'
    }
  ];

  return (
    <View style={styles.container}>
      {/* Card Selector Header */}
      <View style={styles.header}>
        <MaterialCommunityIcons name="credit-card" size={24} color="#008080" />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <TouchableOpacity 
              style={styles.dropdownButton}
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                setVisible(true);
              }}
              accessible
              accessibilityLabel="Select card dropdown"
              accessibilityHint="Double tap to open card selection menu"
            >
              <Text style={styles.selectedCard}>{selectedCard}</Text>
              <MaterialCommunityIcons name="chevron-down" size={24} color="#008080" />
            </TouchableOpacity>
          }
        >
          <Menu.Item onPress={() => {
            setSelectedCard('VISA ending with****3749');
            setVisible(false);
          }} title="VISA ending with****3749" />
          <Menu.Item onPress={() => {
            setSelectedCard('MASTERCARD ending with****8821');
            setVisible(false);
          }} title="MASTERCARD ending with****8821" />
        </Menu>
      </View>

      {/* Transaction List */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {transactions.map((transaction, index) => (
          <React.Fragment key={transaction.transactionId}>
            <TransactionCard data={transaction} />
            {index < transactions.length - 1 && <Divider style={styles.divider} />}
          </React.Fragment>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    flex: 1,
  },
  selectedCard: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#008080',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  transactionCard: {
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    elevation: 4,
    marginBottom: 2,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 12,
  },
  transactionType: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFF',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#A0A0A0',
    marginBottom: 8,
  },
  dateTimeContainer: {
    marginBottom: 4,
  },
  dateTime: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: '#808080',
  },
  transactionId: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#606060',
  },
  amountContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingLeft: 12,
  },
  amount: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    color: '#00BFA5',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
  divider: {
    marginVertical: 12,
    backgroundColor: '#404040',
    height: 1,
  },
});