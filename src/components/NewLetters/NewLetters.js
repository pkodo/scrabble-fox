import React from "react";
import LetterForm from "./LetterForm";
import "./NewLetters.css";
const NewLetters = (props) => {
  const saveLetterDataHandler = (enteredLetterData) => {
    const letterData = enteredLetterData;
    props.onAddLetters(letterData); //we are lifting the state letter date UP
  };
  return (
    <div className="new-letter">
      <LetterForm onSaveLetterData={saveLetterDataHandler} />
    </div>
  );
};

export default NewLetters;
