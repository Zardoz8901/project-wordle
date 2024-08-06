import React from "react";

function GuessInput({ resultsHandler }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    resultsHandler(tentativeGuess);
    setTentativeGuess("");
  }

  function handleOnChange(event) {
    const nextGuess = event.target.value;
    setTentativeGuess(nextGuess.toUpperCase());
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter word:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          value={tentativeGuess}
          onChange={handleOnChange}
          title="Enter a 5 character word"
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
