import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import FlashcardInput from './FlashcardInput';
import { flashcardAdded } from './flashcardsSlice';

function FlashcardsContainer(){
  const dispatch = useDispatch();
  const flashcards = useSelector((state) => state.flashcards.f);

  function handleFlashcardSubmit(name){
    dispatch(flashcardAdded(name));
  }
  return (
    <div>
      <FlashcardInput onFlashcardSubmit={handleFlashcardSubmit} />
    </div>
  )
}

export default FlashcardsContainer;