import { useState } from "react"
import { Filter } from "./components/Filter"
import { PersonForm } from "./components/PersonForm"
import { Persons } from "./components/Persons"

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState([])

  const addPerson = (event) => {
    event.preventDefault()
    let exists = false
    persons.forEach((person) => {
      if (person.name == newName) {
        alert(`${newName} is alreadey added to phonebook`)
        exists = true
      }
    })
    if (!exists) {
      const newPerson = {name: newName, number: newNumber}
      setPersons(persons.concat(newPerson))
    }
  }
  
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
    const newFilteredPersons = []
    persons.forEach(person => {
      if (person.name.toLowerCase().includes(event.target.value)) {
        newFilteredPersons.push(person)
      }
    })
    setFilteredPersons(newFilteredPersons)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter} filteredPersons={filteredPersons} />

      <h3>Add New</h3>
      <PersonForm onSubmit={addPerson} name={newName} handleName={handleNameChange} number={newNumber} handleNumber={handleNumberChange}/>

      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  )
}

export default App
