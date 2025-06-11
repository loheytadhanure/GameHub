// app/simonsays/simonLogic.ts

import { Audio } from 'expo-av';

export const COLORS = ['red', 'green', 'blue', 'yellow'] as const;
export type ColorType = (typeof COLORS)[number];

export const getRandomColor = (): ColorType => {
  const index = Math.floor(Math.random() * COLORS.length);
  return COLORS[index];
};

export const colorSounds: Record<ColorType, any> = {
  red: require('../../assets/sound/red.mp3'),
  green: require('../../assets/sound/green.mp3'),
  blue: require('../../assets/sound/blue.mp3'),
  yellow: require('../../assets/sound/yellow.mp3'),
};

export const playSound = async (color: ColorType) => {
  const { sound } = await Audio.Sound.createAsync(colorSounds[color]);
  await sound.playAsync();
  setTimeout(() => sound.unloadAsync(), 1000); // cleanup
};
