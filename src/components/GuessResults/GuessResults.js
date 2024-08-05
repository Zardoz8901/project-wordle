import React from "react";

function GuessResults({ results }) {
  return (
    <>
      <div className="guess-results">
        {results.map((items) => {
          return (
            <p className="guess" key={items.id}>
              {items.guess}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default GuessResults;
