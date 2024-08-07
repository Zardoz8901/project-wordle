import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [verifiedGuesses, setVerifiedGuesses] = React.useState([]);

  function resultsHandler(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
    console.log(checkGuess(tentativeGuess, answer));
  }

  function verifiedResultsHandler(tentativeGuess) {
    setVerifiedGuesses([
      ...verifiedGuesses,
      checkGuess(tentativeGuess, answer),
    ]);
    console.log(verifiedGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} verifiedGuesses={verifiedGuesses} />
      <GuessInput
        resultsHandler={resultsHandler}
        verifiedResultsHandler={verifiedResultsHandler}
      />
    </>
  );
}

export default Game;
