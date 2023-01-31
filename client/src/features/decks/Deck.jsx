import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Deck(){
    const params = useParams();
    const decks = useSelector((state) => state.decks.entities);

    const thisDeck = decks.find(deck => {
      return deck.id.toString() === params.id;
    });
    console.log(thisDeck);
    console.log(decks);
  return (
    // Remember to render the Flashcards
    <div>
        {/* {thisDeck ? <h3>{thisDeck.name}</h3> : null} */}
        <ul id='card-list'></ul>
    </div>
  )
}

export default Deck;