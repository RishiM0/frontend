import { useState, useEffect } from 'react'
import Name from './components/inputName.jsx'
import Number from './components/inputNumber.jsx'
import DeleteButton from './components/deleteButton.jsx'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/phoneNumbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');

  function getData() {
    axios.get(baseUrl)
    .then(response => {
      setPersons(response.data)
    })
  }

  useEffect(() => {
    getData()
  }, [])

  function dbRemove(id) {
    if (window.confirm("do you really want to delete this user?")){
      let url = baseUrl + "/" + id
      console.log(url)
      axios.delete(url).then(() => getData())
    }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    axios.post(baseUrl, newPerson)
    .then((response) => {
      getData()
      setNewName('')
      setNewNumber('')
    }).catch(error => {
      console.log(error.response.data)
      window.alert(error.response.data.error)
    })
  }
  
  function handleChange (event) {
    setNewName(event.target.value)
  }

  function handleNumberChange (event) {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <Name value={newName} change={handleChange}></Name>
        <Number value={newNumber} change={handleNumberChange}></Number>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => {
        //console.log(persons);
        return(
          <>
            <p>{person.name} - {person.number}</p>
            <button onClick={() => dbRemove(person.id)}> Delete </button>
          </>
        )
      })}
    </div>
  )
}

export default App