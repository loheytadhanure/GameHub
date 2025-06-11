import React from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';

interface FlipCardProps {
  title: string;
  emoji: string;
  onPress: () => void;
}

export default function FlipCard({ title, emoji, onPress }: FlipCardProps) {
  const scale = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={[styles.card, { transform: [{ scale }] }]}>
        <Text style={styles.title}>{title}</Text>        
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        <Text style={styles.emoji}>{emoji}</Text>
        <Text style={styles.click}>click here</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
card: {
  width: 300,
  height: 250,
  marginHorizontal: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.85)', // semi-transparent white
  borderRadius: 20,
  padding: 20,
  justifyContent: 'center',
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 5,
},

  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.85,
  },
    click: {
    color: 'blue',
    marginTop: 8,
    fontSize: 16,
    textDecorationLine: 'underline',
    },

});
