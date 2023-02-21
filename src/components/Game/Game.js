import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import WordInput from "../WordInput";
import GuessList from "../GuessList";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Game() {
  const [answer, setAnswer] = React.useState(() => {
    const firstAnswer = sample(WORDS);
    console.info({ firstAnswer });
    return firstAnswer;
  });
  const [word, setWord] = React.useState("");
  const [wordList, setWordList] = React.useState([]);

  const handleRestart = () => {
    const newAnswer = sample(WORDS);
    console.info({ newAnswer });
    setAnswer(newAnswer);
    setWord("");
    setWordList([]);
  };

  const handleInputChange = (value) => {
    setWord(value.toUpperCase());
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (word.length < 5) {
      console.log("The word must have 5 characters!");
    } else {
      const nextWord = {
        label: word,
        id: crypto.randomUUID(),
        checkedLetters: checkGuess(word, answer),
      };
      const nextWordList = [...wordList, nextWord];
      setWordList(nextWordList);
      setWord("");
    }
  };

  const endGame =
    wordList.length === NUM_OF_GUESSES_ALLOWED ||
    wordList[wordList.length - 1]?.label === answer;

  const win = wordList[wordList.length - 1]?.label === answer;

  return (
    <>
      <GuessList wordList={wordList} />
      <WordInput
        disabled={endGame}
        word={word}
        handleInputSubmit={handleInputSubmit}
        handleInputChange={handleInputChange}
      />
      {endGame && (
        <EndGameBanner
          win={win}
          answer={answer}
          numOfGuesses={wordList.length}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
