import React from 'react';
import { Link } from 'react-router-dom';

function DeckLink({deck}){
    console.log(deck); // Only gets triggered if there is an existing Deck
  return (
    <div id='deck'>
        <img id='deck-image'
            src='https://media.istockphoto.com/id/172162468/photo/fan-of-colored-index-cards.jpg?s=612x612&w=0&k=20&c=6RHWhNpuq4bXu3dLCnNqk28a6WejUSTWG58ahIm8DL4='
            alt={deck.name}
         />
         <p>&nbsp;</p>
         <Link id='linkStyles'>
            {deck.name}
         </Link>
    </div>
  )
}

export default DeckLink;