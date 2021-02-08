import React from "react";
import ReactDOM from "react-dom";
import Note from "./components/Note";

const App = ({ notes }) => {
  console.log(notes);
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note, i) => {
          console.log(note);
          return <Note key={note.id} note={note} />;
        })}
      </ul>
    </div>
  );
};

export default App;
