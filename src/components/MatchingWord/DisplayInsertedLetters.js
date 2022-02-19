import "./DisplayInsertedLetters.css";

const DisplayInsertedLetters = (props) => {
  if (props.letters) {
    return (
      <div>
        <div className="inserted-letters">
          Finding Scrabble words for the following letters: {props.letters}
        </div>
        <div className="description-item">
          <div className="match-item__description">
            <h2>Words</h2>
            <div className="match-item__price">Points</div>
          </div>
        </div>
      </div>
    );
  } else return <div></div>;
};

export default DisplayInsertedLetters;
