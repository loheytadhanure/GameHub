// app/whack-a-mole/index.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
import { getRandomMole } from './moleLogic';

export default function WhackAMole() {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState<number>(getRandomMole());
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setMolePosition(getRandomMole());
    }, 900);
    return () => clearInterval(interval);
  }, []);

  const handlePress = (index: number) => {
    if (index === molePosition) {
      setScore(score + 1);
    }
  };

  const resetGame = () => {
    setScore(0);
    setMolePosition(getRandomMole());
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>🐹 Whack-a-Mole</Text>
        <Text style={styles.score}>Score: {score}</Text>

        <View style={styles.grid}>
          {Array.from({ length: 9 }).map((_, index) => (
            <Pressable
              key={index}
              style={[styles.box, molePosition === index && styles.moleBox]}
              onPress={() => handlePress(index)}
            >
              {molePosition === index && <Text style={styles.mole}>🐹</Text>}
            </Pressable>
          ))}
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable style={({ pressed }) => [styles.resetButton, pressed && styles.buttonPressed]} onPress={resetGame}>
            <Text style={styles.buttonText}>🔄 Reset</Text>
          </Pressable>
          <Pressable style={({ pressed }) => [styles.homeButton, pressed && styles.buttonPressed]} onPress={() => router.replace('/')}>
            <Text style={styles.buttonText}>🏠 Home</Text>
          </Pressable>
        </View>
      </View>
  );
}
