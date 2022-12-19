import React, {useState} from 'react';

function DeckInput({onDeckSubmit}){
  const [name, setName] = useState("");

  function handleInputChange(e){
    setName(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    onDeckSubmit(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Deck Name
        <input 
          type="text" name="name"
          value={name} onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Deck</button>
    </form>
  )
}

export default DeckInput;