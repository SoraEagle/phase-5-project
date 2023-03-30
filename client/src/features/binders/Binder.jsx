import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeckLink from '../decks/DeckLink';
import DeckInput from '../decks/DeckInput';

function Binder(){
  const params = useParams();
  const binders = useSelector((state) => state.binders.entities);

  const theBinder = binders.find(binder => {
    return  binder.id.toString() === params.id;
  });
  
  return (
    <div id='content'>
      <DeckInput />
      {theBinder ? <h3 id='title'>{theBinder.name}</h3> : null}
      <ul id='list'>
        {theBinder?.decks.map(deck => {
          return <DeckLink key={deck.id} binder={theBinder} deck={deck} />
        })}
      </ul>
    </div>
  );
}

export default Binder;