import MatchItem from "./MatchItem";

function Matches(props) {
  //key={index} is very important so that you dont run into issues

  if (props.items.length) {
    return (
      <div>
        {props.items.map((match, index) => (
          <MatchItem key={index} word={match.word} points={match.points} />
        ))}
      </div>
    );
  } else if (props.letters)
    return <MatchItem word="No matching word found!" points="-" />;
  else return <div></div>;
}

export default Matches;
