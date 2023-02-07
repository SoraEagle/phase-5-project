import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flashcardRemoved } from './flashcardsSlice';

function Flashcard(){
  return (
    <div id='flashcard'>
      {/* Add in the question, answer, deck_id, and the flipcard property */}
      <div id='flashcard-inner'>
        <div id='flashcard-question'></div>
        <div id='flashcard-answer'></div>
      </div>
    </div>
  )
}

export default Flashcard;