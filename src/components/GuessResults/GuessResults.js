import React from "react";

function GuessResults({ results }) {
  return (
    <>
      <div className="guess-results">
        {results.map((results) => {
          <p className="guess" key={results.id}>
            {results.name}
          </p>;
        })}
      </div>
    </>
  );
}

export default GuessResults;
