import React, { useState } from "react";
import "./LetterForm.css";

const LetterForm = (props) => {
  const [enteredLetters, setEnteredLetters] = useState("");

  const LetterInsertedHandler = (event) => {
    const re = /[A-Za-z]+/g;
    let val = (event.target.value.match(re) || []).join("");
    if (val.length > 28) {
      val = val.slice(0, -1);
    }
    setEnteredLetters(val);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents reload of the page
    props.onSaveLetterData(enteredLetters); //communicate UP
    setEnteredLetters(""); // Two way binding -> with "value" it is cleared
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-letter__controls">
        <div className="new-letter__control">
          <label>Insert your letters..</label>
        </div>
        <div className="new-letter__control">
          <input
            type="text"
            value={enteredLetters}
            onChange={LetterInsertedHandler}
          />
          <button type="submit">Search</button>
        </div>
      </div>
    </form>
  );
};

export default LetterForm;
