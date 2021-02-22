import React, { useState } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [filter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const personsToShow = () => {
    if (filter) {
      return persons.filter((a) =>
        a.name.toUpperCase().includes(filter.toUpperCase())
      );
    } else {
      return persons;
    }
  };

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const filterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
    personsToShow();
  };
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterChange={filterChange}></Filter>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {personsToShow().map((person) => {
          console.log(person);
          return <Person key={person.name} person={person} />;
        })}
      </ul>
    </div>
  );
};

export default App;
