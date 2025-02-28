import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useState } from 'react';

const { width } = Dimensions.get('window');

interface KifCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export default function KifCard({ 
  title, 
  description, 
  imageUrl, 
  isFavorite = false,
  onToggleFavorite
}: KifCardProps) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleFavoritePress = () => {
    setFavorite(!favorite);
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.illustration}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={6}>
          {description}
        </Text>
        
        <TouchableOpacity 
          style={styles.favoriteButton} 
          onPress={handleFavoritePress}
        >
          <Heart 
            size={24} 
            color={favorite ? '#FF4500' : '#000'} 
            fill={favorite ? '#FF4500' : 'transparent'} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  illustrationContainer: {
    width: '100%',
    height: 200,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 20,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  favoriteButton: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});