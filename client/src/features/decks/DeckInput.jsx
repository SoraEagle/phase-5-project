import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newDeck } from './decksSlice';

function DeckInput(){
  const dispatch = useDispatch();
  const params = useParams();
  const binders = useSelector(state => state.binders.entities);
  const errors = useSelector(state => state.decks.errorMessages);
  const [name, setName] = useState("");

  const thisBinder = binders.find(binder => {
    return  binder.id.toString() === params.id;
  });
  
  function handleSubmit(e){
    e.preventDefault();
    const deck = {
      binder_id: thisBinder.id,
      name: name
    }
    dispatch(newDeck(deck));
    setName('');
  }
  return (
    <div>
      <section>
        <h1>
          <p>Create a new deck here</p>
        </h1>
      </section>
      <form id='input-form' onSubmit={handleSubmit}>
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