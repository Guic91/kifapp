import { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    // Check if user is already logged in
    // If yes, redirect to tabs
    const checkAuth = async () => {
      // For demo purposes, we'll just navigate to login
      // In a real app, you would check for a valid token
      setTimeout(() => {
        router.replace('/(auth)/login');
      }, 2000);
    };

    checkAuth();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.tagline}>Petits moments, grandes joies</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 48,
    color: '#000000',
  },
  yellowDot: {
    color: '#FFD700',
  },
  redDot: {
    color: '#FF4500',
  },
  greenDot: {
    color: '#32CD32',
  },
  tagline: {
    fontFamily: 'MiniKif-Regular',
    fontSize: 18,
    marginTop: 10,
    color: '#222222',
  },
});