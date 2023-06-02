import React from 'react';
import { useSelector } from "react-redux";
import Flashcard from './Flashcard';

function Flashcards(){
  const user = useSelector(state => state.users.entities);
  return (
    <div id='content'>
        <ul id='list' className='flex-container'>
          {user?.flashcards.map(f => {
            return <Flashcard key={f.id} flashcard={f} />
          })}
      </ul>
    </div>
  )
}

export default Flashcards;