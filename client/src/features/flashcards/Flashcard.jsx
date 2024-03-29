import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { flashcardRemoved } from '../binders/bindersSlice';
import { removeFlashcard } from './flashcardsSlice';
import EditFlashcard from './EditFlashcard';

function Flashcard({flashcard}){ // The variable "flashcard" drilled down from Deck.jsx
  const dispatch = useDispatch();
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
        <div>
          <EditFlashcard flashcard={flashcard} onExitForm={exitUpdateForm} />
          <button id='edit-button' className='flashcard-button' onClick={() => setIsEditing(false)}>Discard Edits</button>
        </div>
      ) : (
        <div>
          <div key={flashcard.id} id='flashcard'>
            <div id='flashcard-inner'>
              <div key={flashcard.question} id='flashcard-front'>{flashcard.question}</div>
              <div key={flashcard.answer} id='flashcard-back'>{flashcard.answer}</div>
            </div>
          </div>
            <button id='edit-button' className='flashcard-button' onClick={() => setIsEditing(true)}>Edit</button>
            <button id='delete-button' className='flashcard-button' onClick={handleDeleteClick}>Delete Flashcard</button>
        </div>
      )}
    </div>
  )
}

export default Flashcard;