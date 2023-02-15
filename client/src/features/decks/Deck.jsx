import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FlashcardInput from '../flashcards/FlashcardInput';
import Flashcard from '../flashcards/Flashcard';

function Deck(){
    const params = useParams();
    const binders = useSelector(state => state.binders.entities);
    const [thisDeck, setThisDeck] = useState(null);

    useEffect(() => {
      if(binders.length > 0){
        const thisBinder = binders.find(binder => {return binder.id.toString() === params.binder_id;});
        setThisDeck(thisBinder.decks.find(deck => {return deck.id.toString() === params.id}));
        return thisDeck;
      }
      return thisDeck;
    }, [binders, params.binder_id, params.id]);
  return (
    <div>
      <FlashcardInput thisDeck={thisDeck} />
      <h3>I am a Deck</h3>
        {thisDeck ? <h3 id='title'>{thisDeck.name}</h3> : null}
        <ul id='list' className='flex-container'>
          {thisDeck?.flashcards.length >= 1 ? 
            (thisDeck?.flashcards.map(f => {
              return <Flashcard key={f.id} flashcard={f} />
            })
            ) : (<p>This deck has no flashcards!</p>)
          }
        </ul>
    </div>
  );
}

export default Deck;