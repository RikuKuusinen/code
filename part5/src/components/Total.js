import React from "react";

const Total = (props) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  console.log(props);
  var parts = props.course.parts.map((a) => {
    return a.exercises;
  });
  console.log("parts", parts);

  function someMagicHere(s, p) {
    console.log(s, p);

    return s + p;
  }
  const total = parts.reduce((s, p) => {
    console.log("what is happening", s, p);
    return someMagicHere(s, p);
  });
  console.log(total);

  return <p>Number of exercises {total}</p>;
};

export default Total;
