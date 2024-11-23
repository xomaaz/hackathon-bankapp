import React from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TransactionCard = ({ data }) => (
  <TouchableOpacity 
    style={styles.card}
    accessible
    accessibilityLabel={`${data.type} transaction of PKR ${data.amount}. ${data.description}. On ${data.date} at ${data.time}. ${data.status}`}
  >
    <View style={styles.cardContent}>
      <View style={styles.leftContent}>
        <MaterialCommunityIcons 
          name={data.icon} 
          size={32} 
          color="#00BFA5"
          style={styles.transactionIcon}
        />
        
        <View style={styles.detailsContainer}>
          <View style={styles.topRow}>
            <Text style={styles.transactionType}>{data.type}</Text>
            <Text style={styles.amount}>PKR {data.amount}</Text>
          </View>
          
          <Text style={styles.description}>{data.description}</Text>
          
          <Text style={styles.dateTime}>
            {data.date} • {data.time}
          </Text>
          
          <Text style={styles.transactionId}>
            Transaction ID: {data.transactionId}
          </Text>
        </View>
      </View>
      
      <View style={styles.statusContainer}>
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
      </View>
    </View>
  </TouchableOpacity>
);

export default function TransactionHistory() {
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
          amount: '270.00',
          date: '16 Sep 2023',
          time: '06:08 PM',
          transactionId: '6857865534219',
          icon: 'cash-refund',
          status: 'Cancelled'
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
          amount: '167.00',
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
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#F5F5F5" barStyle="dark-content" />

      {/* Card Selector */}
      <View style={styles.cardSelector}>
        <MaterialCommunityIcons name="credit-card" size={24} color="#008080" />
        <MaterialCommunityIcons name="chevron-down" size={24} color="#008080" style={styles.chevron} />
      </View>

      {/* Transactions List */}
      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {transactions.map((transaction, index) => (
          <TransactionCard 
            key={transaction.transactionId} 
            data={transaction}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  cardSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
  },
  chevron: {
    marginLeft: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    padding: 16,
  },
  cardContent: {
    flex: 1,
  },
  leftContent: {
    flexDirection: 'row',
  },
  transactionIcon: {
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  transactionType: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    flexShrink: 1
  },
  amount: {
    fontSize: 23,
    fontFamily: 'Montserrat-Bold',
    color: '#00BFA5',
  },
  description: {
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    color: '#A0A0A0',
    marginBottom: 12,
  },
  dateTime: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: '#808080',
    marginBottom: 4,
  },
  transactionId: {
    fontSize: 15,
    fontFamily: 'Montserrat-BoldItalic',
    color: '#606060',
  },
  statusContainer: {
    alignSelf: 'flex-end',
    marginTop: 12,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
  },
});