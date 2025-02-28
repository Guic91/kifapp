import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';

declare global {
  interface Window {
    frameworkReady?: () => void;
  }
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    'MiniKif-Regular': require('../assets/fonts/Caveat-Regular.ttf'),
    'MiniKif-Bold': require('../assets/fonts/Caveat-Bold.ttf'),
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.frameworkReady?.();
    }
  }, []);

  // Use system fonts as fallback if custom fonts fail to load
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)/login" />
        <Stack.Screen name="(auth)/signup" />
        <Stack.Screen name="(auth)/social-login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}