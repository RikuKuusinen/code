import React, { useState, useEffect } from "react";
import Filter from "./components/Filter";
import Person from "./components/Person";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [filter, setNewFilter] = useState("");
  const [newNumber, setNewNumber] = useState("");
  useEffect(() => {
    personService.getAll().then((initialNotes) => {
      setPersons(initialNotes);
    });
  }, []);
  const personsToShow = () => {
    if (filter) {
      return persons.filter((a) => {
        if (a.name) {
          return a.name.toUpperCase().includes(filter.toUpperCase());
        }
        return false;
      });
    }
    return persons;
  };

  const addPerson = (event) => {
    console.log(event);
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };

    if (persons.find((p) => p.name === newName)) {
      const pers = persons.find((p) => p.name === newName);
      // eslint-disable-next-line no-alert
      const test = `${newName} is already added to phonebook. Update phone number?`;

      // eslint-disable-next-line no-alert
      const xd = window.confirm(test);
      if (xd) {
        personService
          .update(pers.id, personObject)
          .then((returnedNote) => {
            pers.number = returnedNote.number;
            setNewName("");
            setNewNumber("");
          })
          .catch((error) => {
            console.log("virhe", error);
          });
      }
    } else {
      personService
        .create(personObject)
        .then(() => {
          setPersons(persons.concat(personObject));
          setNewName("");
          setNewNumber("");
        })
        .catch((error) => {
          console.log("virhe", error);
        });
    }
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
      <Filter filter={filter} filterChange={filterChange} />
      <h3>Lisää dude</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
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
