import React from "react";

function EndGameBanner({ answer, numOfGuesses, win }) {
  return (
    <div className={win ? "happy banner" : "sad banner"}>
      {win ? (
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>{numOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default EndGameBanner;
