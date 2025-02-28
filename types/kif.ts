export interface Kif {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  dateOfBirth?: string;
  favorites?: number[];
  emailNotifications: boolean;
  pushNotifications: boolean;
  weekendOnly: boolean;
  language: 'fr' | 'en';
  theme: 'light' | 'dark';
}