import React, { useState } from 'react';
import styles from './NumberGuessingGame.module.css';

function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 101));
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [guessesLeft, setGuessesLeft] = useState(15);
  const [gameOver, setGameOver] = useState(false);

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleGuess = () => {
    if (gameOver) return;
    
    const guessNumber = parseInt(guess, 10);
    
    if (isNaN(guessNumber) || guessNumber < 0 || guessNumber > 100) {
      setMessage('Please enter a number between 0 and 100.');
      return;
    }

    if (guessNumber === targetNumber) {
      setMessage('Congratulations! You guessed the right number!');
      setGameOver(true);
    } else if (guessNumber > targetNumber) {
      setMessage('Too high! Try again.');
    } else {
      setMessage('Too low! Try again.');
    }

    setGuessesLeft(guessesLeft - 1);

    if (guessesLeft - 1 === 0 && guessNumber !== targetNumber) {
      setMessage(`Game over! The number was ${targetNumber}.`);
      setGameOver(true);
    }

    setGuess('');
  };

  const handleRestart = () => {
    setTargetNumber(Math.floor(Math.random() * 101));
    setGuess('');
    setMessage('');
    setGuessesLeft(15);
    setGameOver(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Number Guessing Game</h2>
      <p className={styles.instructions}>Guess a number between 0 and 100</p>
      <input
        type="number"
        value={guess}
        onChange={handleInputChange}
        disabled={gameOver}
        className={styles.input}
      />
      <button
        onClick={handleGuess}
        disabled={gameOver || guess === ''}
        className={styles.button}
      >
        Guess
      </button>
      <p className={styles.message}>{message}</p>
      <p className={styles.guessesLeft}>Guesses Left: {guessesLeft}</p>
      {gameOver && (
        <button onClick={handleRestart} className={styles.restartButton}>
          Play Again
        </button>
      )}
    </div>
  );
}

export default NumberGuessingGame;
