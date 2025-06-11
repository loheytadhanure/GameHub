// app/simonsays/index.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles';
import { COLORS, getRandomColor, playSound, ColorType } from './sequenceLogic';

export default function SimonSays() {
  const [sequence, setSequence] = useState<ColorType[]>([]);
  const [userInput, setUserInput] = useState<ColorType[]>([]);
  const [isDisplaying, setIsDisplaying] = useState(false);
  const [activeColor, setActiveColor] = useState<ColorType | null>(null);
  const [level, setLevel] = useState(0);
  const [message, setMessage] = useState('Press Start to play');
  const router = useRouter();

  useEffect(() => {
    if (userInput.length === sequence.length && sequence.length > 0) {
      if (userInput.join() === sequence.join()) {
        setTimeout(() => {
          nextLevel();
        }, 800);
      } else {
        setMessage('Wrong! Game Over.');
      }
    }
  }, [userInput]);

  const playSequence = async (seq: ColorType[]) => {
    setIsDisplaying(true);
    for (let color of seq) {
      setActiveColor(color);
      await playSound(color);
      await new Promise(res => setTimeout(res, 600));
      setActiveColor(null);
      await new Promise(res => setTimeout(res, 200));
    }
    setIsDisplaying(false);
  };

  const nextLevel = () => {
    const nextColor = getRandomColor();
    const newSequence = [...sequence, nextColor];
    setSequence(newSequence);
    setUserInput([]);
    setLevel(newSequence.length);
    setMessage(`Level ${newSequence.length}`);
    playSequence(newSequence);
  };

  const handlePress = (color: ColorType) => {
    if (isDisplaying) return;
    playSound(color);
    setUserInput(prev => [...prev, color]);
  };

  const startGame = () => {
    setSequence([]);
    setUserInput([]);
    setLevel(1);
    setMessage('Level 1');
    const firstColor = getRandomColor();
    setSequence([firstColor]);
    playSequence([firstColor]);
  };

  const resetGame = () => {
    setSequence([]);
    setUserInput([]);
    setActiveColor(null);
    setLevel(0);
    setMessage('Game reset! Press Start.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 Simon Says</Text>
      <Text style={styles.info}>{message}</Text>

      <View style={styles.grid}>
        {COLORS.map((color) => (
          <Pressable
            key={color}
            onPress={() => handlePress(color)}
            style={[
              styles.button,
              styles[color],
              activeColor === color && styles.active,
            ]}
          />
        ))}
      </View>

      <Pressable style={styles.startButton} onPress={startGame}>
        <Text style={styles.startButtonText}>▶ Start</Text>
      </Pressable>

      <View style={{ flexDirection: 'row', marginTop: 20 }}>
        <Pressable style={[styles.startButton, { marginRight: 10 }]} onPress={resetGame}>
          <Text style={styles.startButtonText}>🔄 Reset</Text>
        </Pressable>
        <Pressable style={styles.startButton} onPress={() => router.replace('/')}>
          <Text style={styles.startButtonText}>🏠 Home</Text>
        </Pressable>
      </View>
    </View>
  );
}
