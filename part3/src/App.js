import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);
  let [points, setPoints] = useState(new Array(6).fill(0));

  return (
    <div>
      <Anecdotes
        anecdotes={anecdotes}
        selected={selected}
        points={points[selected]}
      ></Anecdotes>
      <Anecdotes
        text="Most voted"
        anecdotes={anecdotes}
        selected={mostVoted}
        points={points[mostVoted]}
      ></Anecdotes>

      <Button
        handleClick={() => setSelected(takeRandomNumber())}
        text="Take random attribute"
      />
      <Button
        handleClick={() => {
          setPoints(
            setPointsToSelected(points, selected),
            setMostVoted(setMostVotedPoints(points, mostVoted))
          );
        }}
        text="Vote"
      />
    </div>
  );
};

export function setMostVotedPoints(points, mostVoted) {
  console.log("pisteet", points);
  console.log("most voted", mostVoted);
  if (points && points.some((a) => a > 0)) {
    var max = Math.max(...points);
    console.log("max", max);
    if (max && max != points[mostVoted]) {
      var idx = points.findIndex((a) => a === max);
      console.log("idx", idx);
      console.log("eniten äänestety", mostVoted);
      return idx;
    }
  }
  console.log("ässä");
  console.log(mostVoted);
  console.log(points);
  return mostVoted;
}

export function setPointsToSelected(points, selected) {
  points[selected] = points[selected] + 1;

  return [...points];
}

export function takeRandomNumber() {
  return Math.floor(Math.random() * 6);
}
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);
const Anecdotes = ({ anecdotes, selected, points, text }) => {
  console.log("valittu", selected);

  return (
    <div>
      <br />
      {text}
      <div>{anecdotes[selected]}</div>
      <div>Yhteispisteet: {points}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export default App;
