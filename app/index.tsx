import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView,ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import FlipCard from '../components/FlipCard';
import { AntDesign } from '@expo/vector-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Audio } from 'expo-av';
import Login from './login';
import Signup from './signUp';
import { useAuth } from '../context/AuthContext';
import { RootLayout} from "./_layout";

const games = [
  {
    title: 'Memory Match',
    emoji: '🧠',
    route: '/memory-match',
  },
  {
    title: 'Tic Tac Toe',
    emoji: '❌',
    route: '/tic-tac-toe',
  },
  {
    title: 'Whack-a-Mole',
    emoji: '🐹',
    route: '/whack-a-mole',
  },
  {
    title: 'Simon Says',
    emoji: '🟢',
    route: '/simon-says',
  },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { user } = useAuth();

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % games.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
  };
  // Auto-slide after 5 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentGame = games[currentIndex];

return (
  <ImageBackground
    source={require('../assets/bg.png')}
    style={styles.background}
    resizeMode="cover"
  >
    <View style={styles.wrapper}>
      
      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Header />
        <Text style={styles.title}>🎮 Choose a Game</Text>

        <View style={styles.carouselContainer}>
          <Pressable style={styles.arrow} onPress={handlePrev}>
            <Text style={styles.arrowText}>◀</Text>
          </Pressable>

          <FlipCard
            title={currentGame.title}
            emoji={currentGame.emoji}
            onPress={() => router.push(currentGame.route)}
          />

          <Pressable style={styles.arrow} onPress={handleNext}>
            <Text style={styles.arrowText}>▶</Text>
          </Pressable>
        </View>
      </ScrollView>

      {/* Sticky footer */}
      <Footer />
    </View>
  </ImageBackground>
);

}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
 
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
  fontWeight: 'bold',
  marginVertical: 20,
  alignSelf: 'center',
  color: '#fff', // white text for visibility
  textShadowColor: 'rgba(0, 0, 0, 0.6)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 4,
  },
background: {
  flex: 1,
  width: '100%',
  height: '100%',
},

  carouselContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    padding:20,
  },
  arrow: {
    padding: 10,
  },
  arrowText: {
    fontSize: 36,
  color: '#fff', // white arrows look cleaner over a background image
  fontWeight: 'bold',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
});
