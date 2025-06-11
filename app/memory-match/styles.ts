// app/memory-match/styles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#1e1e1e',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  card: {
    width: 70,
    height: 70,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unflipped: {
    backgroundColor: '#555',
  },
  flipped: {
    backgroundColor: '#00bcd4',
  },
  cardText: {
    fontSize: 28,
    color: '#fff',
  },
});
