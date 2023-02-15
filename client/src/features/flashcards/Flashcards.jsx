import React from 'react';
import { useSelector } from "react-redux";
import Flashcard from './Flashcard';

function Flashcards(){
  const user = useSelector(state => state.users.entities);
  return (
    <div>
      {user ? (
        <ul id='list'>
        {user?.flashcards.map(f => {
          return <Flashcard key={f.id} flashcard={f} />
        })}
      </ul>
      ) : (
        <h1>Something went wrong!</h1>
      )}
    </div>
  )
}

export default Flashcards;