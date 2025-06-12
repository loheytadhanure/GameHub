import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ImageBackground, Dimensions } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FlipCard from '../components/FlipCard';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const games = [
  { title: 'Memory Match', emoji: '🧠', route: '/memory-match' },
  { title: 'Tic Tac Toe', emoji: '❌', route: '/tic-tac-toe' },
  { title: 'Whack-a-Mole', emoji: '🐹', route: '/whack-a-mole' },
  { title: 'Simon Says', emoji: '🟢', route: '/simon-says' },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === games.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentGame = games[currentIndex];

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <Header />

      <View style={styles.mainContent}>
        <Text style={styles.chooseGameText}>🎮 Choose a Game</Text>

        <View style={styles.carouselContainer}>
          <Pressable style={styles.arrow} onPress={handlePrev}>
            <Text style={styles.arrowText}>◀</Text>
          </Pressable>

          <View style={{ marginHorizontal: 10 }}>
            <FlipCard
              title={currentGame.title}
              emoji={currentGame.emoji}
              onPress={() => router.push(currentGame.route)}
            />
          </View>

          <Pressable style={styles.arrow} onPress={handleNext}>
            <Text style={styles.arrowText}>▶</Text>
          </Pressable>
        </View>
      </View>

      <Footer />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    width:'100%',
    height:'100%',
  },
  mainContent: {
    alignItems: 'center',
    paddingVertical: 30,
    flexGrow: 1,
  },
  chooseGameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  
  carouselContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical: 20,
  paddingHorizontal: 16,
  gap: 10, 
},
arrow: {
  padding: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
},
arrowText: {
  fontSize: 28,
  color: '#fff',
  fontWeight: 'bold',
},

});
