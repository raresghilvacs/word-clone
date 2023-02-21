import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import WordInput from "../WordInput";
import GuessList from "../GuessList";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [word, setWord] = React.useState("");
  const [wordList, setWordList] = React.useState([]);

  const handleInputChange = (value) => {
    setWord(value.toUpperCase());
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (word.length < 5) {
      console.log("The word must have 5 characters!");
    } else {
      console.log(word);
      const nextWordList = [
        ...wordList,
        { label: word, id: crypto.randomUUID() },
      ];
      setWordList(nextWordList);
      setWord("");
    }
  };

  return (
    <>
      <GuessList wordList={wordList} />
      <WordInput
        word={word}
        handleInputSubmit={handleInputSubmit}
        handleInputChange={handleInputChange}
      />
    </>
  );
}

export default Game;
