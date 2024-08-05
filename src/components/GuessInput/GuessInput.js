import React from "react";
import GuessResults from "../GuessResults/GuessResults";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    resultsHandler({ guess });
    setGuess("");
  }

  function handleOnChange(event) {
    const nextGuess = event.target.value;
    setGuess(nextGuess.toUpperCase());
  }

  const [results, setResults] = React.useState([]);

  function resultsHandler({ guess }) {
    const newResult = {
      id: crypto.randomUUID(),
      guess: { guess },
    };
    setResults([...results, newResult]);
  }

  return (
    <>
      <GuessResults results={results} />
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter word:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          value={guess}
          onChange={handleOnChange}
          title="Enter a 5 character word"
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
