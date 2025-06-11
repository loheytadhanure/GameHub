// app/memory-match/index.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { generateShuffledCards, Card } from './gameLogic';
import styles from './styles';

export default function MemoryMatch() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const router = useRouter();

  const resetGame = () => {
    setCards(generateShuffledCards());
    setFlippedIndices([]);
  };

  useEffect(() => {
    resetGame();
  }, []);

  const handleCardPress = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].isFlipped || cards[index].isMatched) return;

    const newCards = [...cards];
    newCards[index].isFlipped = true;
    const newFlipped = [...flippedIndices, index];
    setCards(newCards);
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      const [firstIdx, secondIdx] = newFlipped;
      const match = newCards[firstIdx].emoji === newCards[secondIdx].emoji;

      setTimeout(() => {
        const updatedCards = [...newCards];
        if (match) {
          updatedCards[firstIdx].isMatched = true;
          updatedCards[secondIdx].isMatched = true;
        } else {
          updatedCards[firstIdx].isFlipped = false;
          updatedCards[secondIdx].isFlipped = false;
        }
        setCards(updatedCards);
        setFlippedIndices([]);
      }, 1000);
    }
  };

  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      Alert.alert('🎉 You Win!', 'Play again?', [
        { text: 'Yes', onPress: resetGame },
        { text: 'No', onPress: () => router.back() },
      ]);
    }
  }, [cards]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧠 Memory Match</Text>

      {/* Reset Button */}
      <Pressable style={localStyles.resetButton} onPress={resetGame}>
        <Text style={localStyles.resetText}>🔄 Reset Game</Text>
      </Pressable>

      <Pressable style={localStyles.homeButton} onPress={()=> router.push('/')}>
        <Text style={localStyles.homeText}> 🏠Home</Text>
      </Pressable>

      <View style={styles.grid}>
        {cards.map((card, index) => (
          <Pressable
            key={card.id}
            style={[
              styles.card,
              card.isFlipped || card.isMatched ? styles.flipped : styles.unflipped,
            ]}
            onPress={() => handleCardPress(index)}
          >
            <Text style={styles.cardText}>
              {card.isFlipped || card.isMatched ? card.emoji : '❓'}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const localStyles = StyleSheet.create({
  resetButton: {
    backgroundColor: '#ff9800',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    alignSelf: 'center',
  },
  homeButton:{
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',

  },
  resetText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeText:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,

  }
});
