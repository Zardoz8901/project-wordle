import React from "react";

function GuessInput() {
  const [inputValue, setInputValue] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputValue);
    setInputValue("");
  }

  function handleOnChange(event) {
    const newValue = event.target.value;
    console.log(typeof newValue);
    setInputValue(newValue.toUpperCase());
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter word:</label>
        <input
          id="guess-input"
          type="text"
          pattern="[A-Za-z]{5}"
          value={inputValue}
          onChange={handleOnChange}
          title="Enter a 5 character word"
          required
        />
      </form>
    </>
  );
}

export default GuessInput;
