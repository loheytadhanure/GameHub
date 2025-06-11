// app/login.tsx
import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const router = useRouter();
    const { login } = useAuth();

    const handleLogin = () => {
    login(); // sets isLoggedIn = true
    router.push('/');
  };

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
    <View style={styles.wrapper}>
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput placeholder="Username" style={styles.input} placeholderTextColor="black" />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry placeholderTextColor="black" />

        <View style={styles.row}>
          <Text style={styles.smallText}>Remember me</Text>
          <Text style={styles.smallText}>Forgot password?</Text>
        </View>

        <Pressable style={styles.button} onPress={() => router.push('/')}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/signUp')}>
          <Text style={styles.signupText}>Don't have an account? <Text style={styles.highlight}>SignUp</Text></Text>
        </Pressable>
      </View>

    </View>
      
    </ImageBackground>

    
  );
}

const styles = StyleSheet.create({
background: {
  flex: 1,
  width: '100%',
  height: '100%',
},

    wrapper: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
container: {
  width: '90%',        
  maxWidth: 400,
  height: '55%',
  margin: 20,
  padding: 20,
  backgroundColor: 'rgba(10, 8, 8, 0.1)',
  borderRadius: 15,
},

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },

input: {
  backgroundColor: 'rgba(14, 7, 7, 0.2)',
  padding: 10,
  borderRadius: 10,
  marginBottom: 15,
  color: 'white',
  fontWeight: 'bold',
},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallText: {
    fontSize: 12,
    color: '#ccc',
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  signupText: {
    marginTop: 15,
    textAlign: 'center',
    color: '#ccc',
  },
  highlight: {
    color: '#87CEEB',
    fontWeight: 'bold',
  },
});
