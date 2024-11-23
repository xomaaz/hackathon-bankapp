import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button, Title, Subheading, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export default function ConfirmationScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Receipt Header */}
            <Title style={styles.headerTitle}>Transaction Receipt</Title>

            {/* Receipt Card */}
            <Card style={styles.card}>
                <Card.Content>
                    {/* Green Verification Icon */}
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="check-circle" size={64} color="#4CAF50" />
                    </View>

                    {/* Transaction Status */}
                    <Text style={styles.status}>Transfer Completed</Text>

                    {/* Beneficiary Details */}
                    <Subheading style={styles.detailLabel}>Beneficiary:</Subheading>
                    <Text style={styles.detailText}>Ali Nisar Shah</Text>

                    {/* Transfer Amount */}
                    <Subheading style={styles.detailLabel}>Amount Transferred:</Subheading>
                    <Text style={styles.amountText}>PKR 1,000.00</Text>

                    {/* Date and Time */}
                    <Subheading style={styles.detailLabel}>Date:</Subheading>
                    <Text style={styles.detailText}>October 24, 2024</Text>

                    <Subheading style={styles.detailLabel}>Time:</Subheading>
                    <Text style={styles.detailText}>12:34 PM</Text>
                </Card.Content>
            </Card>

            {/* Divider */}
            <Divider style={styles.divider} />

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    style={styles.doneButton}
                    labelStyle={styles.buttonLabel}
                    onPress={() => { navigation.navigate("Dashboard"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); }}
                >
                    Done
                </Button>
                <Button
                    mode="contained"
                    style={styles.addButton}
                    labelStyle={styles.buttonLabel}
                    onPress={() => { navigation.navigate("Dashboard"); Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); }}
                >
                    Add Payee
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', // Dark background color
        padding: 20,
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 30,
        fontFamily: 'Montserrat-Bold',
        color: '#008080', // Teal color for header
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#2C2C2C', // Dark card background
        borderRadius: 16,
        paddingVertical: 20,
        elevation: 4,
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    status: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4CAF50', // Green color for successful status
        textAlign: 'center',
        marginBottom: 20,
    },
    detailLabel: {
        fontSize: 20,
        fontFamily: 'Montserrat-Medium',
        color: '#00BFA5', // Light teal
        textAlign: 'center',
        marginTop: 10,
    },
    detailText: {
        fontSize: 25,
        fontFamily: 'Montserrat-Bold',
        color: '#FFF',
        textAlign: 'center',
        marginBottom: 10,
    },
    amountText: {
        fontSize: 40,
        fontFamily: 'Montserrat-Bold',
        color: '#ffdd57', // Contrasting yellow for amount
        textAlign: 'center',
        marginBottom: 10,
    },
    divider: {
        marginVertical: 20,
        backgroundColor: '#D3D3D3',
        height: 2,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doneButton: {
        backgroundColor: '#4CAF50', // Green button for "Done"
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#f57c00', // Orange button for "Add as Beneficiary"
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        width: '48%',
        alignItems: 'center',
    },
    // buttonLabel: {
    //     fontSize: 18,
    //     fontFamily: 'Montserrat-SemiBold',
    //     color: '#FFF',
    // },

    buttonContent: {
        height: '100%', // Ensures ripple covers the whole button
        width: '100%',
    },
    buttonLabel: {
        fontSize: 20.5,
        fontFamily: 'Montserrat-SemiBold',
        color: '#FFF',
    },
    // buttonContainer: {
    //     alignItems: 'center',
    //     marginTop: 10,
    // },
});
