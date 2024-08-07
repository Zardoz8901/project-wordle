import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function resultsHandler(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput resultsHandler={resultsHandler} />
    </>
  );
}

export default Game;
