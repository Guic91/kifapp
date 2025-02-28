import { StyleSheet, View, Text, TouchableOpacity, Switch, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Bell, Mail, LogOut, ChevronRight } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [weekendOnly, setWeekendOnly] = useState(false);

  const handleLogout = () => {
    // In a real app, you would clear auth tokens
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Mon Profil</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Text style={styles.profileInitials}>JM</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jiara Martins</Text>
            <Text style={styles.profileEmail}>hello@reallygreatsite.com</Text>
          </View>
        </View>
        
        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Modifier mon profil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Mail size={20} color="#000" />
            <Text style={styles.settingText}>Notifications par email</Text>
          </View>
          <Switch
            value={emailNotifications}
            onValueChange={setEmailNotifications}
            trackColor={{ false: '#ddd', true: '#32CD32' }}
            thumbColor="#fff"
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Bell size={20} color="#000" />
            <Text style={styles.settingText}>Notifications push</Text>
          </View>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: '#ddd', true: '#32CD32' }}
            thumbColor="#fff"
          />
        </View>
        
        <View style={styles.settingItem}>
          <View style={styles.settingInfo}>
            <Text style={styles.settingText}>Weekends seulement</Text>
          </View>
          <Switch
            value={weekendOnly}
            onValueChange={setWeekendOnly}
            trackColor={{ false: '#ddd', true: '#32CD32' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Préférences</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Langue</Text>
          <View style={styles.menuItemRight}>
            <Text style={styles.menuItemValue}>Français</Text>
            <ChevronRight size={18} color="#999" />
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Thème</Text>
          <View style={styles.menuItemRight}>
            <Text style={styles.menuItemValue}>Clair</Text>
            <ChevronRight size={18} color="#999" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compte</Text>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Changer le mot de passe</Text>
          <ChevronRight size={18} color="#999" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Confidentialité</Text>
          <ChevronRight size={18} color="#999" />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.menuItem, styles.logoutItem]} onPress={handleLogout}>
          <LogOut size={20} color="#FF4500" />
          <Text style={styles.logoutText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 20,
  },
  logo: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 36,
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
    fontSize: 20,
    marginTop: 5,
  },
  profileSection: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitials: {
    fontSize: 24,
    fontWeight: '600',
    color: '#666',
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  editProfileButton: {
    backgroundColor: '#222',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
  },
  editProfileButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  section: {
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 10,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemValue: {
    fontSize: 14,
    color: '#999',
    marginRight: 5,
  },
  logoutItem: {
    marginTop: 20,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#FF4500',
    fontSize: 16,
    marginLeft: 10,
  },
});