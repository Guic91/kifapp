import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SocialLoginScreen() {
  const router = useRouter();

  const handleFacebookLogin = () => {
    // In a real app, you would implement Facebook OAuth
    router.replace('/(tabs)');
  };

  const handleGoogleLogin = () => {
    // In a real app, you would implement Google OAuth
    router.replace('/(tabs)');
  };

  const handleEmailLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Connexion</Text>
        <Text style={styles.helperText}>Sign in to continue.</Text>
      </View>

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity 
          style={[styles.socialButton, styles.facebookButton]} 
          onPress={handleFacebookLogin}
        >
          <Text style={styles.facebookButtonText}>Se connecter avec Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.socialButton, styles.googleButton]} 
          onPress={handleGoogleLogin}
        >
          <Text style={styles.googleButtonText}>Connectez-vous avec Google</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OU</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity 
          style={[styles.socialButton, styles.emailButton]} 
          onPress={handleEmailLogin}
        >
          <Text style={styles.emailButtonText}>Connectez-vous avec votre e-mail</Text>
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
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 60,
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
  socialButtonsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  socialButton: {
    width: '100%',
    padding: 15,
    borderRadius: 4,
    alignItems: 'center',
    marginBottom: 15,
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  facebookButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleButtonText: {
    color: '#444',
    fontWeight: '500',
  },
  emailButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  emailButtonText: {
    color: '#444',
    fontWeight: '500',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    paddingHorizontal: 10,
    color: '#666',
  },
});