import React from "react";
import { range } from "../../utils";

function GuessResults({ guesses }) {
  const [results, setResults] = React.useState([]);
  function grid() {
    return range(6).map((index) => (
      <p className="guess" key={index}>
        {range(5).map((num, index) => (
          <span className="cell" key={index}>
            {num + 1}
          </span>
        ))}
      </p>
    ));
  }

  /* {guesses.map((items) => {
          return (
            <p className="guess" key={items.id}>
              {items.guess}
            </p>
          );
        })} */

  return (
    <>
      <div className="guess-results">{grid()}</div>
    </>
  );
}

export default GuessResults;
