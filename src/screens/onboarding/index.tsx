import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { GoogleIcon, OnboardingBackgroundImage } from '../../constants/image';
import { styles } from './style';

export default function Onboarding() {
  return (
    <ImageBackground
      source={OnboardingBackgroundImage}
      style={styles.container}
    >
      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Ready to Race?</Text>
        <Text style={styles.description}>
          Master your reaction time and compete with the fastest players in the
          world.
        </Text>
        <TouchableOpacity style={styles.signGoogleButton}>
          <Image
            source={GoogleIcon}
            resizeMode="contain"
            style={styles.googleIcon}
          />
          <Text style={styles.signGoogleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.guestButton}>
          <Text style={styles.guestButtonText}>Continue as Guest</Text>
        </TouchableOpacity>
        <Text style={styles.versionText}>{'v0.0.1-beta'}</Text>
      </View>
    </ImageBackground>
  );
}
