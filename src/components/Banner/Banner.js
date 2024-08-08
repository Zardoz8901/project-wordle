import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Banner({ correctCount, verifiedGuesses }) {
  function correctCountHandler() {
    console.log(verifiedGuesses.length);
    if (correctCount === 5) {
      return window.alert("winner");
    } else if (
      verifiedGuesses.length === NUM_OF_GUESSES_ALLOWED &&
      correctCount !== 5
    ) {
      return window.alert("failure");
    }
  }

  return (
    <>
      <div className="happy banner visually-hidden">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.{correctCountHandler()}
        </p>
      </div>
      <div className="sad banner visually-hidden">
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    </>
  );
}

export default Banner;
