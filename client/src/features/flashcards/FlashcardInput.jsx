import React, {useState} from 'react';

function FlashcardInput({onFlashcardSubmit}){
  const [name, setName] = useState("");

  function handleInputChange(e){
    setName(e.target.value);
  }
  function handleSubmit(e){
    e.preventDefault();
    onFlashcardSubmit(name);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text" name="name"
          value={name} onChange={handleInputChange}
        />
      </label>
      <button type="submit">Create Flashcard</button>
    </form>
  )
}

export default FlashcardInput;