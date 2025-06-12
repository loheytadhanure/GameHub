
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { isLoggedIn, logout } = useAuth();
  const router = useRouter();

  return (
    <View style={styles.header}>
      <Text style={styles.brand}>GameWorld</Text>

      {isLoggedIn ? (
        <Pressable style={styles.profile} onPress={logout}>
          <FontAwesome name="user-circle" size={24} color="white" />
          <Text style={styles.loggedInText}>Logged in</Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>Login </Text>
        </Pressable>
        
      )}
    </View>
  );
}

const styles = StyleSheet.create({

  header: {
  width: '100%',
  padding: 20,
  backgroundColor: 'rgba(0,0,0,0.4)',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},

  brand: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  loginText: {
    color: '#87CEEB',
    fontWeight: 'bold',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loggedInText: {
    color: 'white',
    marginLeft: 6,
  },
});
