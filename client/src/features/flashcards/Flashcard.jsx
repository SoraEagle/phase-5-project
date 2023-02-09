import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { flashcardRemoved } from './flashcardsSlice';

function Flashcard({flashcard}){
  const binders = useSelector((state) => state.binders.entities);
  const dispatch = useDispatch();
  const params = useParams();
  const thisBinder = binders.find(binder => {
    return  binder.id.toString() === params.binder_id;
  });
  const thisDeck = thisBinder?.decks.find(deck => {
    return deck.id.toString() === params.id;
  });
  const flashcards = thisDeck?.flashcards;

  console.log(flashcards);

  function handleDeleteClick(){
    dispatch(flashcardRemoved());
  }
  return (
    <div id='flashcard-frame'>
      <div key={flashcard.id} id='flashcard'>
        <div id='flashcard-inner'>
          <div key={flashcard.question} id='flashcard-front'>{flashcard.question}</div>
          <div key={flashcard.answer} id='flashcard-back'>{flashcard.answer}</div>
        </div>
      </div>
      <button id='edit-button'>Edit</button>
      <button id='delete-button' onClick={handleDeleteClick}>Delete Flashcard</button>
    </div>
  )
}

export default Flashcard;