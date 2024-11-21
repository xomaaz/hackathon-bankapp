import React from 'react';
import { View, StyleSheet, Image, Text, ImageBackground } from 'react-native';
import { Button, useTheme } from 'react-native-paper';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  const theme = useTheme();

  return (
    <ImageBackground
      source={require('../../assets/images/faysalBank.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.7 }}
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

      <View style={styles.versionContainer}>
        <Text style={[styles.versionText, { fontFamily: 'Montserrat-Regular' }]}>Version 2.0.2</Text>
      </View>

      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>
          Welcome to Faysal Bank
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Login')}
          style={[styles.button, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
          labelStyle={styles.buttonLabel}
          accessibilityLabel="Login Button"
          accessibilityHint="Tap to go to the login screen"
        >
          LOGIN
        </Button>
        <Button
          mode="outlined"
          onPress={() => navigation.navigate('Register')}
          style={[styles.outlineButton, { shadowColor: 'rgba(0, 0, 0, 0.2)', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.5, shadowRadius: 4 }]}
          labelStyle={styles.outlineButtonLabel}
          accessibilityLabel="Register Button"
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
    marginTop: '30%',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Semi-transparent white background
    borderRadius: 15,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.9)',
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
    width: '80%',
  },
  button: {
    marginVertical: 10,
    paddingVertical: 10,
    backgroundColor: '#008080',
    borderRadius: 8,
  },
  buttonLabel: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
  },
  outlineButton: {
    marginVertical: 10,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#008080',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Semi-transparent white background
  },
  outlineButtonLabel: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#008080',
  },
});