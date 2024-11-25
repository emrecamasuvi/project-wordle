import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = React.useState("");
  const LIMIT = 5;
  const submission = (e) => {
    e.preventDefault();
    if (word.length === LIMIT) {
      setWord("");
      console.log(word);
    }
  };
  return (
    <>
      <form onSubmit={submission} class="guess-input-wrapper">
        <label for="guess-input">Enter guess: {word}</label>
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
