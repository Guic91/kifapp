import { Text, StyleSheet } from 'react-native';

interface LogoProps {
  size?: number;
  useFallbackFont?: boolean;
}

export default function Logo({ size = 36, useFallbackFont = false }: LogoProps) {
  const fontFamily = useFallbackFont ? 'System' : 'MiniKif-Bold';
  
  return (
    <Text style={[styles.logo, { fontSize: size, fontFamily }]}>
      M<Text style={[styles.logo, styles.yellowDot, { fontSize: size, fontFamily }]}>i</Text>n
      <Text style={[styles.logo, styles.redDot, { fontSize: size, fontFamily }]}>i</Text>K
      <Text style={[styles.logo, styles.greenDot, { fontSize: size, fontFamily }]}>i</Text>f
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'MiniKif-Bold',
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
});