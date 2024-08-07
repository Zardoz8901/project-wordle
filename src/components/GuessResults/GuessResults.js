import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, verifiedGuesses }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num) => {
          return <Guess key={num} value={verifiedGuesses[num]} />;
        })}
      </div>
    </>
  );
}

export default GuessResults;
