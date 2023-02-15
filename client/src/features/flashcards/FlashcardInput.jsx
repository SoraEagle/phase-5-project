import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { newFlashcard } from './flashcardsSlice';

function FlashcardInput(){
  const dispatch = useDispatch();
  const params = useParams();
  const binders = useSelector(state => state.binders.entities);
  const currentUser = useSelector(state => state.users.entities);
  const errors = useSelector(state => state.flashcards.errorMessages);
  const [userId, setUserId] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  
  const thisBinder = binders.find(binder => {
    return  binder.id.toString() === params.binder_id;
  });
  const thisDeck = thisBinder?.decks.find(deck => {
    return deck.id.toString() === params.id
  });

  function handleSubmit(e){
    e.preventDefault();
    setUserId(currentUser.id);
    const flashcard = {
      user_id: userId,
      deck_id: thisDeck.id,
      question: question,
      answer: answer
    }
    dispatch(newFlashcard(flashcard));
    setQuestion('');
    setAnswer('');
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
      <br />
      <label>
        Answer
        <input
          type="text" name="answer"
          value={answer} onChange={e => setAnswer(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Flashcard</button>
      <br />
      {errors?.map((err) => (
        <p id='errors' key={err}>{err}</p>
      ))}
    </form>
  )
}

export default FlashcardInput;