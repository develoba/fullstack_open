import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personsService from "./services/persons";
import { Notification } from "./components/Notification";

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    let exists = false;
    const newPerson = { name: newName, number: newNumber };

    persons.forEach((person) => {
      if (person.name == newName) {
        exists = true;
        const update = window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        );
        if (update) {
          personsService.update(person.id, newPerson).then((returnedPerson) => {
            setPersons(
              persons.map((p) => (p.id !== person.id ? p : returnedPerson))
            );
          });
        }
      }
    });
    if (!exists) {
      personsService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
        setSuccessMessage(`Added ${response.name}`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 2000);
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
      personsService.remove(personId).then((response) => {
        if (response.status == 200) {
          setPersons(persons.filter((p) => p.id !== personId));
        }
      });
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
      <Notification message={successMessage} />
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
