import React from "react";

function Banner({ bannerState }) {
  return (
    <>
      <div className={`${bannerState} banner`}>
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong>3 guesses</strong>.
        </p>
      </div>
      <div className={`${bannerState} banner`}>
        <p>
          Sorry, the correct answer is <strong>LEARN</strong>.
        </p>
      </div>
    </>
  );
}

export default Banner;
