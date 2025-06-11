import { useEffect, useState } from 'react';
import { Audio } from 'expo-av';

export default function useBackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  const toggleMusic = async () => {
    if (isPlaying) {
      await sound?.stopAsync();
      setIsPlaying(false);
    } else {
      if (!sound) {

            const { sound: newSound } = await Audio.Sound.createAsync(
              require('../assets/sound/music.mp3'),  // ✅ This is now correct
              { isLooping: true }
            );

        setSound(newSound);
        await newSound.playAsync();
      } else {
        await sound.playAsync();
      }
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return { isPlaying, toggleMusic };
}
