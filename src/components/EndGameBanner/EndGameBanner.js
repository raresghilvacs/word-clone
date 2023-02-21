import React from "react";

function EndGameBanner({ answer, numOfGuesses, win, handleRestart }) {
  return (
    <div className={win ? "happy banner" : "sad banner"}>
      {win ? (
        <>
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{numOfGuesses} guesses</strong>.
          </p>
          <button className="banner-button" onClick={() => handleRestart()}>
            Restart
          </button>
        </>
      ) : (
        <>
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button className="banner-button" onClick={() => handleRestart()}>
            Restart
          </button>
        </>
      )}
    </div>
  );
}

export default EndGameBanner;
