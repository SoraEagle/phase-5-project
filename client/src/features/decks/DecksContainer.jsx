import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import DeckInput from './DeckInput';
import { deckAdded } from './decksSlice';

function DecksContainer(){
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.decks.decks);

  function handleDeckSubmit(name){
    dispatch(deckAdded(name));
  }
  return (
    <div>
      <DeckInput onDeckSubmit={handleDeckSubmit} />
    </div>
  )
}

export default DecksContainer;