import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Heart, Trash2 } from 'lucide-react-native';

// Sample favorites data
const initialFavorites = [
  {
    id: 1,
    title: 'La note oubliée dans un vieux manteau',
    description: "C'est un geste anodin, machinal. On enfile un manteau resté trop longtemps au fond d'un placard...",
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2011&auto=format&fit=crop',
    date: '12 Mai 2025'
  },
  {
    id: 3,
    title: "À demain pour une nouvelle dose de douceur!",
    description: "Les petits plaisirs, c'est comme le chocolat : mieux vaut les déguster que les dévorer !",
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=2070&auto=format&fit=crop',
    date: '10 Mai 2025'
  }
];

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(initialFavorites);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Image source={{ uri: item.image }} style={styles.favoriteImage} />
      <View style={styles.favoriteContent}>
        <Text style={styles.favoriteTitle}>{item.title}</Text>
        <Text style={styles.favoriteDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.favoriteDate}>{item.date}</Text>
      </View>
      <TouchableOpacity 
        style={styles.removeButton} 
        onPress={() => removeFavorite(item.id)}
      >
        <Trash2 size={20} color="#FF4500" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>
          M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
          <Text style={[styles.logo, styles.redDot]}>i</Text>K
          <Text style={[styles.logo, styles.greenDot]}>i</Text>f
        </Text>
        <Text style={styles.subtitle}>Mes Favoris</Text>
      </View>

      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderFavoriteItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Heart size={60} color="#ddd" />
          <Text style={styles.emptyText}>Vous n'avez pas encore de favoris</Text>
          <Text style={styles.emptySubtext}>
            Ajoutez des kifs à vos favoris en cliquant sur l'icône cœur
          </Text>
        </View>
      )}
    </View>
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
  listContainer: {
    padding: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  favoriteImage: {
    width: 80,
    height: 80,
  },
  favoriteContent: {
    flex: 1,
    padding: 10,
  },
  favoriteTitle: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  favoriteDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  favoriteDate: {
    fontSize: 12,
    color: '#999',
  },
  removeButton: {
    padding: 15,
    justifyContent: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});