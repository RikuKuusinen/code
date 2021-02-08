import React from "react";
import Part from "./Part";

const Content = (props) => {
  console.log("content", props);
  var map = props.course.parts.map((element) => {
    return (
      <Part
        key={element.id}
        part={element.name}
        exercises={element.exercises}
      ></Part>
    );
  });
  return map;
};

export default Content;
