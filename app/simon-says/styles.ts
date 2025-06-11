// app/simonsays/simonsaysStyles.ts

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  grid: {
    width: 300,
    height: 300,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  red: {
    backgroundColor: 'red',
    borderColor: '#880000',
  },
  green: {
    backgroundColor: 'green',
    borderColor: '#005500',
  },
  blue: {
    backgroundColor: 'blue',
    borderColor: '#000088',
  },
  yellow: {
    backgroundColor: 'yellow',
    borderColor: '#999900',
  },
  active: {
    opacity: 0.4,
  },
  info: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  homeButton:{
       backgroundColor: '#444',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,

  },
    homeButtonText: {
    color: '#fff',
    fontSize: 16,
  },

});
