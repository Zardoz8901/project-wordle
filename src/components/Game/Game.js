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
  const [endGame, setEndGame] = React.useState(false);
  const [bannerState, setBannerState] = React.useState("visually-hidden");

  function resultsHandler(tentativeGuess) {
    setGuesses([...guesses, tentativeGuess]);
  }

  function verifiedResultsHandler(tentativeGuess) {
    const newGuess = checkGuess(tentativeGuess, answer);
    const filteredStatus = newGuess.filter(
      (letter) => letter.status === "correct"
    ).length;
    setVerifiedGuesses((prevGuesses) => {
      const updatedGuesses = [...prevGuesses, newGuess];
      updateBannerState(updatedGuesses.length, filteredStatus);
      return updatedGuesses;
    });
    setCorrectCount(filteredStatus);
  }

  function updateBannerState(guessCount, correctCount) {
    if (correctCount === 5) {
      setBannerState("happy");
      setEndGame(true);
    } else if (guessCount === NUM_OF_GUESSES_ALLOWED && correctCount !== 5) {
      setBannerState("sad");
      setEndGame(true);
    }
  }

  return (
    <>
      <GuessResults verifiedGuesses={verifiedGuesses} />
      <GuessInput
        resultsHandler={resultsHandler}
        verifiedResultsHandler={verifiedResultsHandler}
        endGame={endGame}
      />
      <Banner bannerState={bannerState} />
    </>
  );
}

export default Game;
