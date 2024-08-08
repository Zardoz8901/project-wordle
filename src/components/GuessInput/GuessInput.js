import React from "react";

function GuessInput({ resultsHandler, verifiedResultsHandler, endGame }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    resultsHandler(tentativeGuess);
    verifiedResultsHandler(tentativeGuess);
    setTentativeGuess("");
  }

  function handleOnChange(event) {
    const nextGuess = event.target.value;
    setTentativeGuess(nextGuess.toUpperCase());
  }

  function inputHandler() {
    return endGame ? "" : tentativeGuess;
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter word:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          value={inputHandler()}
          onChange={handleOnChange}
          title="Enter a 5 character word"
          disabled={endGame}
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
