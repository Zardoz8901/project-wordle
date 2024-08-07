import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        return (
          <span
            className={`cell  ${value ? value[num].status : undefined}`}
            key={num}
          >
            {value ? value[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
