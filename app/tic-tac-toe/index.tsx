// app/tic-tac-toe/index.tsx
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { checkWinner } from './aiLogic';
import styles from './styles';
import { router } from 'expo-router';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const handlePress = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic Tac Toe</Text>

      <View style={styles.board}>
        {board.map((cell, idx) => (
          <Pressable
            key={idx}
            style={styles.cell}
            onPress={() => handlePress(idx)}
          >
            <Text style={styles.cellText}>{cell}</Text>
          </Pressable>
        ))}
      </View>

      {winner ? (
        <Text style={styles.winnerText}>{winner} Wins!</Text>
      ) : (
        <Text style={styles.turnText}>Current Player: {currentPlayer}</Text>
      )}

      <Pressable style={styles.resetButton} onPress={resetGame}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </Pressable>
      <Pressable style={styles.homeButton} onPress={()=> router.push('/')}>
        <Text style={styles.homeText}>🏠Home</Text>
      </Pressable>
    </View>
  );
}
