import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessList({ wordList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((guessNumber) => (
        <p key={guessNumber} className="guess">
          {range(5).map((index) => (
            <span className="cell" key={index}>
              {wordList[guessNumber] && wordList[guessNumber].label[index]}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}

export default GuessList;
