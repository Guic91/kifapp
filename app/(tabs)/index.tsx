import { useState, useRef } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react-native';
import Animated, { useSharedValue, useAnimatedScrollHandler } from 'react-native-reanimated';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// Sample kifs data
const kifs = [
  {
    id: 1,
    title: 'La note oubliée dans un vieux manteau',
    description: "C'est un geste anodin, machinal. On enfile un manteau resté trop longtemps au fond d'un placard, on glisse la main dans la poche, et là... quelque chose de froissé. Un ticket de caisse, un bout de papier jauni, une note griffonnée à la hâte. On la déplie doucement, comme une relique. L'encre a un peu pâli, les lettres sont pressées, maladroites. Une adresse ? Un numéro de téléphone ? Trois mots jetés à la va-vite.",
    image: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=2011&auto=format&fit=crop'
  },
  {
    id: 2,
    title: "L'écureuil insaisissable",
    description: "On l'aperçoit d'abord du coin de l'œil, une ombre rousse qui file entre les troncs. Un bond silencieux, une course fluide, comme une flamme vivante qui traverse les branches. Alors, on s'arrête. On retient son souffle. Il est là, juste au-dessus, figé sur une branche fine, sa queue immense dressée comme un panache. Il tourne la tête, ses petits yeux noirs brillent d'une curiosité méfiante.",
    image: 'https://images.unsplash.com/photo-1507666405895-422eee7d517f?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: "À demain pour une nouvelle dose de douceur!",
    description: "Les petits plaisirs, c'est comme le chocolat : mieux vaut les déguster que les dévorer !",
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function HomeScreen() {
  const scrollX = useSharedValue(0);
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<number[]>([]);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  const handleNext = () => {
    if (currentIndex < kifs.length - 1) {
      const nextIndex = currentIndex + 1;
      scrollRef.current?.scrollTo({ x: nextIndex * SCREEN_WIDTH, animated: true });
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      scrollRef.current?.scrollTo({ x: prevIndex * SCREEN_WIDTH, animated: true });
      setCurrentIndex(prevIndex);
    }
  };

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(favId => favId !== id) 
        : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logo}>
            M<Text style={[styles.logo, styles.yellowDot]}>i</Text>n
            <Text style={[styles.logo, styles.redDot]}>i</Text>K
            <Text style={[styles.logo, styles.greenDot]}>i</Text>f
          </Text>
        </View>

        <View style={styles.carouselContainer}>
          <TouchableOpacity 
            style={[styles.navButton, styles.leftButton]} 
            onPress={handlePrev}
            disabled={currentIndex === 0}
          >
            <ArrowLeft size={24} color={currentIndex === 0 ? '#ccc' : '#000'} />
          </TouchableOpacity>

          <Animated.ScrollView
            ref={scrollRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={scrollHandler}
            scrollEventThrottle={16}
            onMomentumScrollEnd={(e) => {
              const newIndex = Math.round(e.nativeEvent.contentOffset.x / SCREEN_WIDTH);
              setCurrentIndex(newIndex);
            }}
          >
            {kifs.map((kif, index) => (
              <View key={kif.id} style={styles.slide}>
                <View style={styles.illustrationContainer}>
                  <Image
                    source={{ uri: kif.image }}
                    style={styles.illustration}
                    resizeMode="cover"
                  />
                </View>
                <Text style={styles.kifTitle}>{kif.title}</Text>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.kifDescription}>{kif.description}</Text>
                </View>
                
                <TouchableOpacity 
                  style={styles.favoriteButton} 
                  onPress={() => toggleFavorite(kif.id)}
                >
                  <Heart 
                    size={28} 
                    color="#FF4500" 
                    fill={favorites.includes(kif.id) ? "#FF4500" : "transparent"} 
                  />
                </TouchableOpacity>
              </View>
            ))}
          </Animated.ScrollView>

          <TouchableOpacity 
            style={[styles.navButton, styles.rightButton]} 
            onPress={handleNext}
            disabled={currentIndex === kifs.length - 1}
          >
            <ArrowRight size={24} color={currentIndex === kifs.length - 1 ? '#ccc' : '#000'} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 10,
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
  carouselContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    position: 'absolute',
    zIndex: 10,
    padding: 15,
  },
  leftButton: {
    left: 0,
  },
  rightButton: {
    right: 0,
  },
  slide: {
    width: SCREEN_WIDTH,
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'relative',
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
    marginBottom: 20,
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  kifTitle: {
    fontFamily: 'MiniKif-Bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  descriptionContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  kifDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#444',
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    padding: 8,
  },
});