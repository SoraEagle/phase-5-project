import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { flashcardRemoved } from './flashcardsSlice';

function Flashcard({flashcard}){
  const params = useParams();
  const binders = useSelector((state) => state.binders.entities);
  const thisBinder = binders.find(binder => {
    return  binder.id.toString() === params.binder_id;
  });
  const thisDeck = thisBinder?.decks.find(deck => {
    return deck.id.toString() === params.id;
  });
  const flashcards = thisDeck?.flashcards;

  // const flashcards = useSelector(state => state.flashcards.flashcards);
  console.log(flashcards);
  return (
    <div key={flashcard.id} id='flashcard'>
      <div id='flashcard-inner'>
        <div key={flashcard.question} id='flashcard-question'>{flashcard.question}</div>
        <div key={flashcard.answer} id='flashcard-answer'>{flashcard.answer}</div>
      </div>
    </div>
  )
}

export default Flashcard;