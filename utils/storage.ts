import { Platform } from 'react-native';

// Mock storage functions for demo purposes
// In a real app, these would use AsyncStorage or SecureStore

const storage = {
  getItem: async (key: string): Promise<string | null> => {
    // For web, we can use localStorage
    if (Platform.OS === 'web') {
      return localStorage.getItem(key);
    }
    
    // Mock implementation for native
    console.log(`Getting ${key} from storage`);
    return null;
  },
  
  setItem: async (key: string, value: string): Promise<void> => {
    // For web, we can use localStorage
    if (Platform.OS === 'web') {
      localStorage.setItem(key, value);
      return;
    }
    
    // Mock implementation for native
    console.log(`Setting ${key} in storage`);
  },
  
  removeItem: async (key: string): Promise<void> => {
    // For web, we can use localStorage
    if (Platform.OS === 'web') {
      localStorage.removeItem(key);
      return;
    }
    
    // Mock implementation for native
    console.log(`Removing ${key} from storage`);
  }
};

export default storage;