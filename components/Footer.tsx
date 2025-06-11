import React from 'react';
import { View, Text, StyleSheet, Linking, Pressable } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import useBackgroundMusic from '../hooks/useBackgroundMusic';



export default function Footer() {
  const router = useRouter();
  const { isPlaying, toggleMusic } = useBackgroundMusic();


  return (
    <View style={styles.footer}>
      {/* Branding */}
      <View style={styles.column}>
        <Text style={styles.brand}>GameHub</Text>
        <Text style={styles.slogan}>Let the fun begin!</Text>
      </View>

      {/* Contact */}
      <View style={styles.column}>
        <Text style={styles.heading}>ABOUT US</Text>
        <Text style={styles.email} onPress={() => Linking.openURL('mailto:gamehub@support.com')}>
          gamehub@support.com
        </Text>
        <Text style={styles.text}>+91-9876543210</Text>
        <Text style={styles.text}>Learn more</Text>
      </View>

      {/* Game Links + Social */}
      <View style={styles.column}>
        <Text style={styles.heading}>MORE GAMES</Text>
        <Pressable onPress={() => router.push('/memory-match')}>
          <Text style={styles.link}>Memory Match</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/tic-tac-toe')}>
          <Text style={styles.link}>Tic Tac Toe</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/whack-a-mole')}>
          <Text style={styles.link}>Whack-a-Mole</Text>
        </Pressable>
        <Pressable onPress={() => router.push('/simon-says')}>
          <Text style={styles.link}>Simon Says</Text>
        </Pressable>

        <View style={styles.socialRow}>
          <FontAwesome name="linkedin" size={20} color="#f0f0f0" style={styles.icon} />
          <FontAwesome name="instagram" size={20} color="#f0f0f0" style={styles.icon} />
          
        </View>
  <Pressable onPress={toggleMusic}>
    <Text style={styles.musicToggle}>
      {isPlaying ? '🔊 Music On' : '🔇 Music Off'}
    </Text>
  </Pressable>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // translucent black
    padding: 20,
    marginTop: 40,
  },
  column: {
    flexBasis: '30%',
    minWidth: 120,
    marginBottom: 20,
  },
  brand: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  slogan: {
    color: '#ccc',
    fontSize: 14,
    marginTop: 5,
  },
  heading: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  email: {
    color: '#87CEEB',
    textDecorationLine: 'underline',
    marginBottom: 4,
  },
  text: {
    color: '#ddd',
    marginBottom: 3,
    fontSize: 13,
  },
  link: {
    color: '#87CEEB',
    textDecorationLine: 'underline',
    marginBottom: 4,
    fontSize: 14,
  },
  socialRow: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  icon: {
    marginRight: 12,
  },
  newsletter: {
    color: '#87CEEB',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
  musicToggle: {
  color: '#fff',
  fontWeight: 'bold',
  marginTop: 8,
},
});
  