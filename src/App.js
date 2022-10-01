import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [persons, setPersons] = useState([
    
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 }
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchWord, setSearchWord] = useState("");

  const [showAll, setShowAll] = useState(true);

  const handleInput = (event) => {
    setNewName(event.target.value);
  };

  const handleInputNo = (event) => {
    setNewNumber(event.target.value);
  };

  const addPhoneNo = (event) => {
    event.preventDefault();
    const phoneNo = {
      name: newName,
      number: newNumber
    };

    const isIncluded = persons.some((pers) => {
      if (pers.name === phoneNo.name) {
        return true;
      }
      return false;
    });

    isIncluded
      ? alert(`${newName} is already added to phonebook`)
      : setPersons(persons.concat(phoneNo));

    // setnotes((prevNotes) => {
    //   return [...prevNotes, note];
    // });

    setNewName("");
    setNewNumber("");
  };

  const handleSearch = (event) => {
    setSearchWord(event.target.value);
    setShowAll(!showAll);
  };

  const personsToShow = showAll
    ? persons
    : persons.filter((showper) => showper.name === searchWord);

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <input
        onChange={handleSearch}
        value={searchWord}
        placeholder="Search..."
      />

      <form>
        <div className="input-box">
          <input onChange={handleInput} value={newName} placeholder="Name" />
          <input
            onChange={handleInputNo}
            value={newNumber}
            placeholder="Phone Number"
          />
          <button onClick={addPhoneNo} type="submit">
            Add
          </button>
        </div>
      </form>

      <h2> Numbers </h2>
      <div className="phonebook">
        {personsToShow.map((naam) => (
          <li>
            {naam.name} <span className="phoneNo"> {naam.number} </span>
          </li>
        ))}
      </div>
      {/* <div>debug: {newName}</div> */}
    </div>
  );
}
