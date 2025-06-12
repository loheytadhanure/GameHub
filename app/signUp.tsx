import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';

export default function Signup() {
  const router = useRouter();

  return (
    <ImageBackground source={require('../assets/bg.png')} style={styles.background}>
        <View style={styles.wrapper}>
            <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>

        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />

        <Pressable style={styles.button} onPress={() => router.push('/login')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/login')}>
          <Text style={styles.switchText}>Already have an account? <Text style={{ fontWeight: 'bold' }}>Login</Text></Text>
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

