import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newFlashcard } from './flashcardsSlice';

function FlashcardInput({onFlashcardSubmit}){
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  function handleSubmit(e){
    e.preventDefault();
  }
  return (
    <form id='input-form' onSubmit={handleSubmit}>
      <label>
        Question
        <input
          type="text" name="question"
          value={question} onChange={e => setQuestion(e.target.value)}
        />
      </label>
      <div></div>
      <label>
        Answer
        <input
          type="text" name="answer"
          value={answer} onChange={e => setAnswer(e.target.value)}
        />
      </label>
      <div></div>
      <button type="submit">Create Flashcard</button>
    </form>
  )
}

export default FlashcardInput;