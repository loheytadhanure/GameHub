// app/whack-a-mole/whack-a-moleStyles.ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 2 },
    textShadowRadius: 4,
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  grid: {
    width: '90%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 40,
  },
  box: {
    width: 90,
    height: 90,
    margin: 10,
    borderRadius: 50,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  moleBox: {
    backgroundColor: '#FFD700',
    transform: [{ scale: 1.1 }],
    shadowColor: '#fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  mole: {
    fontSize: 36,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },
  resetButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 6,
  },
  homeButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonPressed: {
    transform: [{ scale: 1.05 }],
    opacity: 0.9,
  },
});
