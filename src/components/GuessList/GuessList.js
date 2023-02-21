import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ wordList }) {
  const setCellStyle = (word, letterNumber) => {
    const className = "cell";
    if (word) {
      return className.concat(" ", word.checkedLetters[letterNumber].status);
    }
    return className;
  };

  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <p key={guessNumber} className="guess">
          {range(5).map((letterNumber) => (
            <span
              className={setCellStyle(wordList[guessNumber], letterNumber)}
              key={letterNumber}
            >
              {wordList[guessNumber] &&
                wordList[guessNumber].label[letterNumber]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
