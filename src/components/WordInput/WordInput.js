import React from "react";

function WordInput({ handleInputSubmit, handleInputChange, word, disabled }) {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => handleInputSubmit(e)}
    >
      <label htmlFor="word-input">Enter guess:</label>
      <input
        type="text"
        id="word-input"
        disabled={disabled}
        value={word}
        maxLength={5}
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
    </form>
  );
}

export default WordInput;
