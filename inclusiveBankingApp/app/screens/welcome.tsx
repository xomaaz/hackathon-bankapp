import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import * as Haptics from 'expo-haptics';
import { RadioButtonContext } from 'react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup';



export default function WelcomeScreen({ navigation }: { navigation: any }) {
  const theme = useTheme();

  const handlePressLogin = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Provides haptic feedback
    navigation.navigate('Login')

  };

  const handlePressRegister = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); // Provides haptic feedback
    navigation.navigate('Register')

  };

  return (
    <ImageBackground
      source={require('../../assets/images/faysalBank.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.5 }}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/fbLogo.png')}
          style={[styles.logo, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
          resizeMode="contain"
          accessible
          accessibilityLabel="Faysal Bank Logo"
        />
      </View>

      {/* <View style={styles.versionContainer}>
        <Text style={[styles.versionText, { fontFamily: 'Montserrat-Regular' }]}>Version 2.0.2</Text>
      </View> */}

      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>
          Welcome to Faysal Bank
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={handlePressLogin}
          style={[styles.button, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 1, height: 1 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
          labelStyle={styles.buttonLabel}
          contentStyle={styles.buttoncontext} // Increased height for larger buttons
          accessibilityLabel="Login"
          accessibilityHint="Tap to go to the login screen"
        >
          LOGIN
        </Button>
        <Button
          mode="outlined"
          onPress={handlePressRegister}
          style={[styles.outlineButton, { shadowColor: 'rgba(0, 0, 0, 1.0)', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
          labelStyle={styles.outlineButtonLabel}
          contentStyle={styles.buttoncontext}
          accessibilityLabel="Register"
          accessibilityHint="Tap to go to the register screen"

        >
          REGISTER
        </Button>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logoContainer: {
    position: 'absolute',
    top: 200,
    left: 20,
    alignItems: 'center',
  },
  logo: {
    width: 320,
    height: 100,
  },
  versionContainer: {
    position: 'absolute',
    bottom: 602,
    right: 164,
  },
  versionText: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: '#333333', // Darker gray for better contrast
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 6,
  },
  welcomeTextContainer: {
    marginTop: '0%',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Semi-transparent white background
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  welcomeText: {
    fontSize: 40,
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
    color: '#004d4d',  // Darker teal color for better contrast
    textShadowColor: 'rgba(255, 255, 255, 0.8)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
    letterSpacing: 0.5,  // Slightly increased letter spacing for better readability
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '80%', // Increased width for larger buttons
  },
  button: {
    backgroundColor: '#008080',
    borderRadius: 12, // Slightly more rounded corners
    // bottom: 20, // Increased margin for better spacing
  },
  buttonLabel: {
    fontSize: 20, // Larger font for better readability
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  outlineButton: {
    marginVertical: 15,
    paddingVertical: 15,
    // borderWidth: 3, // Slightly thicker border for visibility
    borderColor: '#008080',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
  },
  outlineButtonLabel: {
    fontSize: 20, // Larger font for consistency
    fontFamily: 'Montserrat-SemiBold',
    color: '#008080',
  },
  buttoncontext: {
    height: 80, // Increased height for larger buttons
    padding: 0,
  }
});