import React from "react";

function WordInput() {
  const [word, setWord] = React.useState("");

  const handleInputChange = (value) => {
    setWord(value.toUpperCase());
  };

  const handleInputSubmit = (event) => {
    event.preventDefault();
    if (word.length < 5) {
      console.log("The word must have 5 characters!");
    } else {
      console.log(word);
      setWord("");
    }
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => handleInputSubmit(e)}
    >
      <label htmlFor="word-input">Enter guess:</label>
      <input
        type="text"
        id="word-input"
        value={word}
        maxLength={5}
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
    </form>
  );
}

export default WordInput;
