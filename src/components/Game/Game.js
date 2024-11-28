import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from '../Guess';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = React.useState('');
  const [guess, setGuess] = React.useState([]);
  const [attempt, setAttempt] = React.useState(0);
  const LIMIT = 5;
  const submission = (e) => {
    e.preventDefault();
    if (attempt === NUM_OF_GUESSES_ALLOWED) {
      return console.warn('MAXIMUM_NUM_OF_GUESSES_REACHED');
    }
    if (word.length === LIMIT) {
      const newArr = [...guess, word]
      const newAttempt = attempt + 1
      setGuess(newArr)
      setWord("");
      setAttempt(newAttempt)
    }
  };
  return (
    <>
      <Guess answer={answer} children={guess} />
      <form onSubmit={submission} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess: {word}</label>
        <input
          autoComplete="password"
          required
          id="guess-input"
          minLength={LIMIT}
          maxLength={LIMIT}
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value.toUpperCase())}
        />
      </form>
    </>
  );
}

export default Game;
