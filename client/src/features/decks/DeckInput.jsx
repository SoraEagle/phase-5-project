import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newDeck } from './decksSlice';

function DeckInput({binder}){
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.decks.errorMessages);
  const [name, setName] = useState("");
  function handleSubmit(e){
    e.preventDefault();
    dispatch(newDeck({
      binder_id: binder.id,
      name: name
    }))
    // Dispatch to bindersslice
  }
  return (
    <div>
      <section>
        <h1>
          <p>Create a new deck here</p>
        </h1>
      </section>
      <form id='deck-input' onSubmit={handleSubmit}>
        <label>
          Deck Name
          <input 
            type="text" name="name"
            value={name} onChange={e => setName(e.target.value)}
          />
        </label>
        <button type="submit">Create Deck</button>
        <div>
          {errors?.map((err) => (
            <p id='errors' key={err}>{err}</p>
          ))}
        </div>
      </form>
    </div>
  )
}

export default DeckInput;