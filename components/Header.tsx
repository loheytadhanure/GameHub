// import React from 'react';
// import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { useRouter } from 'expo-router';

// const Header = () => {
//   const router = useRouter();

//   return (
//     <View style={styles.header}>
//       <Text style={styles.logo}>GameHub</Text>
//       <Pressable onPress={() => router.push('/login')}>
//         <Text style={styles.login}>Login / SignUp</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     width: '100%',
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)', // semi-transparent white
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     backdropFilter: 'blur(10px)', // works only in web
//   },
//   logo: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   login: {
//     color: 'black',
//     textDecorationLine: 'underline',
//     fontSize: 20,
//   },
// });

// export default Header;
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
