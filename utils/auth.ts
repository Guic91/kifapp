import { Platform } from 'react-native';

// Mock authentication functions for demo purposes
// In a real app, these would connect to a backend service

export const login = async (email: string, password: string) => {
  // Simulate API call
  return new Promise<{ token: string; user: any }>((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: 'mock-jwt-token',
          user: {
            id: '1',
            name: 'Jiara Martins',
            email: email,
            emailNotifications: true,
            pushNotifications: true,
            weekendOnly: false,
            language: 'fr',
            theme: 'light',
            favorites: [1, 3]
          }
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 1000);
  });
};

export const signup = async (name: string, email: string, password: string, dateOfBirth?: string) => {
  // Simulate API call
  return new Promise<{ token: string; user: any }>((resolve, reject) => {
    setTimeout(() => {
      if (name && email && password) {
        resolve({
          token: 'mock-jwt-token',
          user: {
            id: '1',
            name: name,
            email: email,
            dateOfBirth: dateOfBirth,
            emailNotifications: true,
            pushNotifications: true,
            weekendOnly: false,
            language: 'fr',
            theme: 'light',
            favorites: []
          }
        });
      } else {
        reject(new Error('Missing required fields'));
      }
    }, 1000);
  });
};

export const logout = async () => {
  // Simulate API call
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

export const forgotPassword = async (email: string) => {
  // Simulate API call
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      if (email) {
        resolve();
      } else {
        reject(new Error('Email is required'));
      }
    }, 1000);
  });
};

export const socialLogin = async (provider: 'facebook' | 'google') => {
  // In a real app, this would integrate with the respective OAuth provider
  // For web, we would use expo-web-browser
  // For native, we would use expo-auth-session
  
  if (Platform.OS === 'web') {
    console.log(`Simulating ${provider} login on web`);
  } else {
    console.log(`Simulating ${provider} login on native`);
  }
  
  return new Promise<{ token: string; user: any }>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'mock-social-token',
        user: {
          id: '2',
          name: 'Social User',
          email: `user@${provider}.com`,
          emailNotifications: true,
          pushNotifications: true,
          weekendOnly: false,
          language: 'fr',
          theme: 'light',
          favorites: []
        }
      });
    }, 1500);
  });
};