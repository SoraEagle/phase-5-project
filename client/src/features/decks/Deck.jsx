import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlashcardInput from '../flashcards/FlashcardInput';

function Deck(){
    const params = useParams();
    const binders = useSelector((state) => state.binders.entities);
    const [thisDeck, setThisDeck] = useState(null);

    useEffect(() => {
      if(binders.length >= 1){
        const thisBinder = binders.find(binder => {return binder.id.toString() === params.binder_id;});
        setThisDeck(thisBinder.decks.find(deck => {return deck.id.toString() === params.id}));
        return thisDeck;
      }
      return thisDeck;
    }, [binders, params.binder_id, params.id, thisDeck]);

    console.log(thisDeck);
  return (
    // Remember to render the Flashcards
    <div>
      <FlashcardInput />
      <h3>I am a Deck</h3>
        {thisDeck ? <h3>{thisDeck.name}</h3> : null}
        <ul id='card-list'></ul>
    </div>
  );
}

export default Deck;