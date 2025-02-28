import { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';

export default function SignupScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSignup = () => {
    // In a real app, you would validate and create account
    router.replace('/(tabs)');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={24} color="#000" />
      </TouchableOpacity>
      
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Création de compte</Text>
      </View>

      <Link href="/(auth)/login" style={styles.alreadyRegistered}>
        <Text style={styles.alreadyRegisteredText}>Already Registered? Log in here.</Text>
      </Link>

      <View style={styles.formContainer}>
        <Text style={styles.label}>NAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Jiara Martins"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="hello@reallygreatsite.com"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={styles.label}>DATE OF BIRTH</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.datePickerText}>Select</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Je crée mon compte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    marginBottom: 20,
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
  alreadyRegistered: {
    alignItems: 'center',
    marginBottom: 20,
  },
  alreadyRegisteredText: {
    color: '#666',
    textDecorationLine: 'underline',
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
  datePickerText: {
    color: '#666',
  },
  signupButton: {
    backgroundColor: '#222222',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  signupButtonText: {
    color: '#fff',
    fontFamily: 'MiniKif-Bold',
    fontSize: 18,
  },
});