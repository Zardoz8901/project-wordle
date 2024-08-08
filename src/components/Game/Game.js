import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [verifiedGuesses, setVerifiedGuesses] = React.useState([]);
  const [correctCount, setCorrectCount] = React.useState(0);

  function resultsHandler(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  function verifiedResultsHandler(tentativeGuess) {
    const newGuess = checkGuess(tentativeGuess, answer);
    const filteredStatus = newGuess.filter(
      (letter) => letter.status === "correct"
    ).length;
    setVerifiedGuesses([...verifiedGuesses, newGuess]);
    setCorrectCount(filteredStatus);
  }

  return (
    <>
      <GuessResults verifiedGuesses={verifiedGuesses} />
      <GuessInput
        resultsHandler={resultsHandler}
        verifiedResultsHandler={verifiedResultsHandler}
      />
      <Banner correctCount={correctCount} verifiedGuesses={verifiedGuesses} />
    </>
  );
}

export default Game;
