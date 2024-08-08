import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import { checkGuess } from "../../game-helpers";
import WonBanner from "../WonBanner/WonBanner";
import LossBanner from "../LossBanner/LossBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("running");

  function handleSubmitGuess(tentativeGuess) {
    const newGuess = checkGuess(tentativeGuess, answer);
    const nextGuesses = [...guesses, newGuess];
    setGuesses(nextGuesses);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput resultsHandler={handleSubmitGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && <WonBanner numOfGuesses={guesses.length} />}
      {gameStatus === "lost" && <LossBanner answer={answer} />}
    </>
  );
}

export default Game;
