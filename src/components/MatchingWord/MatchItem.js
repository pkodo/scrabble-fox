import "./MatchItem.css";
import PopUp from "./PopUp";
import axios from "axios";

import { useState, useEffect, useRef } from "react";

const MatchItem = (props) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loadedDefinition, setLoadedDefinition] = useState([]);

  const GetDefinition = async () => {
    try {
      let url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + props.word;
      const response = await axios.get(url);
      setLoadedDefinition(
        response.data[0].meanings[0].definitions[0].definition
      );
    } catch (err) {
      console.clear();
      setLoadedDefinition("Sorry, no definition found!");
    }
    setButtonPopup(true);
  };

  let popupRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!popupRef.current?.contains(event.target)) setButtonPopup(false);
    });
  }, []);

  return (
    <div className="match-item">
      <div className="match-item__description">
        <h2>{props.word}</h2>
        <button className="match-item__price" onClick={GetDefinition}>
          Definition
        </button>
        <div className="match-item__price">{props.points}</div>
        <PopUp
          innerRef={popupRef}
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
        >
          <h3>{loadedDefinition}</h3>
        </PopUp>
      </div>
    </div>
  );
};

export default MatchItem;
