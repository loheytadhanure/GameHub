// app/tic-tac-toe/styles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1a1a2e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  board: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 300,
    height: 300,
    backgroundColor: '#16213e',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cell: {
    width: '33.33%',
    height: '33.33%',
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 48,
    color: '#00f2fe',
    fontWeight: 'bold',
  },
  winnerText: {
    fontSize: 24,
    color: '#ffd700',
    marginVertical: 20,
  },
  turnText: {
    fontSize: 20,
    color: '#ccc',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#00f2fe',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#fff',
  },
  resetButtonText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: 'bold',
  },
    homeButton: {
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
    elevation: 5,
    shadowColor: '#fff',
    marginTop: 20,
  },
  homeText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
