import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    let exists = false;
    persons.forEach((person) => {
      if (person.name == newName) {
        alert(`${newName} is alreadey added to phonebook`);
        exists = true;
      }
    });
    if (!exists) {
      const newPerson = { name: newName, number: newNumber };

      personsService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
      });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilter = (event) => {
    setNewFilter(event.target.value);
    const newFilteredPersons = [];
    persons.forEach((person) => {
      if (person.name.toLowerCase().includes(event.target.value)) {
        newFilteredPersons.push(person);
      }
    });
    setFilteredPersons(newFilteredPersons);
  };

  const handleDelete = async (personId) => {
    if (window.confirm()) {
      const deleteStatus = await personsService.remove(personId);
      if (deleteStatus == 200) {
        personsService.getAll().then((response) => {
          setPersons(response);
        });
      } else {
        alert("There was an error deleting this contact");
      }
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newFilter={newFilter}
        handleFilter={handleFilter}
        filteredPersons={filteredPersons}
      />

      <h3>Add New</h3>
      <PersonForm
        onSubmit={addPerson}
        name={newName}
        handleName={handleNameChange}
        number={newNumber}
        handleNumber={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={persons} onDelete={handleDelete} />
    </div>
  );
}

export default App;
