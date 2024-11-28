import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import Guess from '../Guess';
import Result from '../Result';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = React.useState('');
  const [guess, setGuess] = React.useState([]);
  const [attempt, setAttempt] = React.useState(0);
  const [gameResult, setGameResult] = React.useState(null);
  const LIMIT = 5;
  const submission = (e) => {
    e.preventDefault();
    if (word.length !== LIMIT) return
    const newArr = [...guess, word]
    const newAttempt = attempt + 1
    setGuess(newArr)
    setWord("");
    setAttempt(newAttempt)
    if (word === answer) return setGameResult('success')
    if (newAttempt >= NUM_OF_GUESSES_ALLOWED) setGameResult('failure')
  };
  return (
    <>

      <Guess answer={answer} children={guess} />
      { gameResult && <Result gameResult={gameResult} attempt={attempt} answer={answer} /> }
      <form onSubmit={submission} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess: {word}</label>
        <input
          autoComplete="password"
          required
          id="guess-input"
          disabled={gameResult !== null}
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
