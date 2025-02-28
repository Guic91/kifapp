import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // In a real app, you would validate and authenticate
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Connexion</Text>
        <Text style={styles.helperText}>Sign in to continue.</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Jiara Martins"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <Text style={styles.label}>MOT DE PASSE</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Je me connecte</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <Link href="/(auth)/forgot-password" style={styles.link}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </Link>
          <Link href="/(auth)/signup" style={styles.link}>
            <Text style={styles.linkText}>Signup!</Text>
          </Link>
        </View>

        <TouchableOpacity 
          style={styles.socialLoginButton} 
          onPress={() => router.push('/(auth)/social-login')}
        >
          <Text style={styles.socialLoginText}>Login with social accounts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 42,
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
  subtitle: {
    fontFamily: 'MiniKif-Regular',
    fontSize: 24,
    marginTop: 10,
    color: '#000',
  },
  helperText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#222222',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'MiniKif-Bold',
    fontSize: 18,
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  link: {
    padding: 5,
  },
  linkText: {
    color: '#666',
  },
  socialLoginButton: {
    marginTop: 30,
    padding: 10,
    alignItems: 'center',
  },
  socialLoginText: {
    color: '#222',
    textDecorationLine: 'underline',
  },
});