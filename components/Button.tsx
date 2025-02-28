import { StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  loading?: boolean;
  disabled?: boolean;
  style?: object;
}

export default function Button({ 
  title, 
  onPress, 
  variant = 'primary', 
  loading = false,
  disabled = false,
  style
}: ButtonProps) {
  const buttonStyles = [
    styles.button,
    variant === 'primary' && styles.primaryButton,
    variant === 'secondary' && styles.secondaryButton,
    variant === 'outline' && styles.outlineButton,
    disabled && styles.disabledButton,
    style
  ];

  const textStyles = [
    styles.text,
    variant === 'primary' && styles.primaryText,
    variant === 'secondary' && styles.secondaryText,
    variant === 'outline' && styles.outlineText,
    disabled && styles.disabledText
  ];

  return (
    <TouchableOpacity 
      style={buttonStyles} 
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? '#222222' : '#fff'} 
          size="small" 
        />
      ) : (
        <Text style={textStyles}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#222222',
  },
  secondaryButton: {
    backgroundColor: '#FFD700',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#222222',
  },
  disabledButton: {
    backgroundColor: '#cccccc',
    borderColor: '#cccccc',
  },
  text: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 16,
  },
  primaryText: {
    color: '#ffffff',
  },
  secondaryText: {
    color: '#222222',
  },
  outlineText: {
    color: '#222222',
  },
  disabledText: {
    color: '#888888',
  },
});