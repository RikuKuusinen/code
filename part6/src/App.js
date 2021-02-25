import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

const App = () => {
  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes);
    });
  }, []);
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [filter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const personsToShow = () => {
    if (filter) {
      return persons.filter((a) => {
        if (a.name) {
          return a.name.toUpperCase().includes(filter.toUpperCase());
        } else {
          return false;
        }
      });
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
    personService.create(personObject).then((returnedNote) => {
      setPersons(persons.concat(personObject));
      setNewName("");
      setNewNumber("");
    });
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
      <h3>Lisää dude</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      ></PersonForm>
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
