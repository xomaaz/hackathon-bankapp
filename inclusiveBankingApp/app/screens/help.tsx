import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Pressable, Platform } from 'react-native';
import { Title, Text, Card, Button, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Speech from 'expo-speech';
import * as Haptics from 'expo-haptics';

interface SupportSection {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export default function HelpScreen({ navigation }: { navigation: any }) {
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Support sections data
  const supportSections: SupportSection[] = [
    {
      id: 'navigation',
      title: 'Navigation Assistance',
      description: 'Learn how to navigate through the app using VoiceOver or TalkBack. Double tap to select, swipe right or left to move between elements.',
      icon: 'gesture-tap'
    },
    {
      id: 'voice',
      title: 'Voice Commands',
      description: 'Use voice commands to perform common actions. Say "Check Balance", "Make Transfer", or "Find Transactions" to quickly access features.',
      icon: 'microphone'
    },
    {
      id: 'text',
      title: 'Text Size & Contrast',
      description: 'Adjust text size and contrast to make content more readable. Go to Settings to customize your visual preferences.',
      icon: 'format-size'
    },
    {
      id: 'security',
      title: 'Security Features',
      description: 'Learn about biometric authentication, voice verification, and other secure ways to access your account.',
      icon: 'shield-check'
    },
    {
      id: 'contact',
      title: 'Contact Support',
      description: 'Get in touch with our dedicated accessibility support team available 24/7. Call us or request a callback.',
      icon: 'headset'
    }
  ];

  // Welcome message for screen reader
  const welcomeMessage = 
    "Welcome to Help and Support. We're here to assist you with your banking needs. " +
    "This screen contains five main sections: Navigation Assistance, Voice Commands, " +
    "Text Size and Contrast, Security Features, and Contact Support. " +
    "Swipe right to explore each section, or double tap to select.";

  useEffect(() => {
    const speakWelcome = async () => {
      setIsSpeaking(true);
      try {
        await Speech.speak(welcomeMessage, {
          language: 'en',
          pitch: 1.0,
          rate: 0.9,
          onDone: () => setIsSpeaking(false)
        });
      } catch (error) {
        console.error('Speech error:', error);
        setIsSpeaking(false);
      }
    };

    speakWelcome();

    return () => {
      Speech.stop();
    };
  }, []);

  const handleSectionPress = async (section: SupportSection) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    if (isSpeaking) {
      await Speech.stop();
    }

    Speech.speak(`${section.title}. ${section.description}`, {
      language: 'en',
      pitch: 1.0,
      rate: 0.9
    });
  };

  const handleEmergencySupport = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    // Implement emergency support call functionality
    console.log('Emergency support called');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Title 
          style={styles.headerTitle}
          accessible={true}
          accessibilityLabel="Help and Support Screen"
          accessibilityRole="header"
        >
          Help & Support
        </Title>
        <Text style={styles.headerSubtitle}>
          We're here to assist you
        </Text>
      </View>

      {/* Emergency Support Button */}
      <Button
        mode="contained"
        icon={() => <MaterialCommunityIcons name="phone-alert" size={24} color="#FFF" />}
        style={styles.emergencyButton}
        labelStyle={styles.emergencyButtonLabel}
        onPress={handleEmergencySupport}
        accessible={true}
        accessibilityLabel="Emergency Support. Double tap to call support immediately"
        accessibilityHint="Initiates a call to our emergency support line"
      >
        Emergency Support
      </Button>

      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        accessible={true}
        accessibilityLabel="Support sections scroll view"
      >
        {supportSections.map((section, index) => (
          <React.Fragment key={section.id}>
            <Pressable
              onPress={() => handleSectionPress(section)}
              accessible={true}
              accessibilityLabel={`${section.title} section. ${section.description}`}
              accessibilityHint="Double tap to hear more information"
              accessibilityRole="button"
            >
              <Card style={styles.card}>
                <Card.Content style={styles.cardContent}>
                  <MaterialCommunityIcons 
                    name={section.icon as any}
                    size={32}
                    color="#008080"
                    style={styles.icon}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.cardTitle}>{section.title}</Text>
                    <Text style={styles.cardDescription}>{section.description}</Text>
                  </View>
                </Card.Content>
              </Card>
            </Pressable>
            {index < supportSections.length - 1 && <Divider style={styles.divider} />}
          </React.Fragment>
        ))}
      </ScrollView>

      {/* Footer Support Info */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Available 24/7 at 0800-BANK-HELP
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#E8E8E8',
    padding: 20,
    borderRadius: 12,
    margin: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerTitle: {
    fontSize: 32,
    fontFamily: 'Montserrat-Bold',
    color: '#004d4d',
    textAlign: 'center',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: '#666',
    textAlign: 'center',
  },
  emergencyButton: {
    backgroundColor: '#FF3B30',
    margin: 16,
    padding: 8,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  emergencyButtonLabel: {
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    paddingVertical: 8,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#2C2C2C',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    color: '#666',
    lineHeight: 24,
  },
  divider: {
    marginVertical: 16,
    backgroundColor: '#E0E0E0',
    height: 1,
  },
  footer: {
    backgroundColor: '#E8E8E8',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#004d4d',
  },
});