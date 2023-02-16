import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { flashcardRemoved } from '../binders/bindersSlice';
import { removeFlashcard } from './flashcardsSlice';
import EditFlashcard from './EditFlashcard';

function Flashcard({flashcard}){ // The variable "flashcard" drilled down from Deck.jsx
  const dispatch = useDispatch();
  const binders = useSelector(state => state.binders.entities);

  binders?.find(myBinder => {
    const thisDeck = myBinder.decks?.find(myDeck => {
      return myDeck.id === flashcard.deck_id
    });
    return thisDeck;
  })
  const [isEditing, setIsEditing] = useState(false);

  function exitUpdateForm(){
    setIsEditing(false);
  }

  function handleDeleteClick(){
    dispatch(flashcardRemoved(flashcard));
    dispatch(removeFlashcard(flashcard));
  }
  return (
    <div id='flashcard-frame'>
      {isEditing ? (
        <EditFlashcard flashcard={flashcard} onExitForm={exitUpdateForm} />
      ) : (
        <div key={flashcard.id} id='flashcard'>
          <div id='flashcard-inner'>
            <div key={flashcard.question} id='flashcard-front'>{flashcard.question}</div>
            <div key={flashcard.answer} id='flashcard-back'>{flashcard.answer}</div>
          </div>
        </div>
      )}
      <button id='edit-button' onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
      <button id='delete-button' onClick={handleDeleteClick}>Delete Flashcard</button>
    </div>
  )
}

export default Flashcard;