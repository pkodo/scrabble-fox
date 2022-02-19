import { useState } from "react";

import DisplayImage from "./components/UI/DisplayImage";
import NewLetters from "./components/NewLetters/NewLetters";
import { dictionary_en } from "./Dictionary_official_en";
import Matches from "./components/MatchingWord/Matches";
import DisplayInsertedLetters from "./components/MatchingWord/DisplayInsertedLetters";

//let language = "en";

let match = [];
let inserted_letters;
function App() {
  const [new_match, setMatch] = useState(match);

  const addLetterHandler = (letters) => {
    inserted_letters = letters;
    match = [];
    let dictionary = dictionary_en;
    for (let item in dictionary) {
      let el = dictionary[item];
      if (el.length <= letters.length) {
        let newLetters = letters.toLowerCase();
        let sum = 0;
        for (let letter in newLetters) {
          if (el.includes(newLetters[letter])) {
            // el = aah leads to "aa", "aah", "ah", "ha", "aha"
            switch (newLetters[letter]) {
              case "a":
              case "e":
              case "i":
              case "o":
              case "u":
              case "l":
              case "n":
              case "s":
              case "t":
              case "r":
                sum += 1;
                break;
              case "d":
              case "g":
                sum += 2;
                break;
              case "b":
              case "c":
              case "m":
              case "p":
                sum += 3;
                break;
              case "f":
              case "h":
              case "v":
              case "w":
              case "y":
                sum += 4;
                break;
              case "k":
                sum += 5;
                break;
              case "j":
              case "x":
                sum += 8;
                break;
              case "q":
              case "z":
                sum += 10;
                break;
              default:
                console.log("Something went wrong!");
                break;
            }
            el = el.replace(newLetters[letter], "");
          }
        }
        if (el === "") {
          if (!match.length)
            match.push({
              word: dictionary[item],
              points: sum,
            });
          else {
            for (let index in match) {
              if (match[index].points <= sum) {
                match.splice(index, 0, { word: dictionary[item], points: sum });
                break;
              }
            }
          }
        }
      }
    }
    setMatch(match);
  };

  return (
    <div>
      <DisplayImage />
      <NewLetters onAddLetters={addLetterHandler} />
      <DisplayInsertedLetters letters={inserted_letters} />
      <Matches items={new_match} letters={inserted_letters} />
    </div>
  );
}

export default App;
