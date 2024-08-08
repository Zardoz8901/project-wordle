import React from "react";
import { range } from "../../utils";

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => {
        const ClassName = value ? `cell ${value[num].status}` : "cell";
        return (
          <span className={ClassName} key={num}>
            {value ? value[num].letter : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
