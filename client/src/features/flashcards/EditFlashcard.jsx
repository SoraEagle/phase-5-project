import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFlashcard } from './flashcardsSlice';

function EditFlashcard({flashcard}){
    const dispatch = useDispatch();
    const errors = useSelector(state => state.flashcards.errorMessages);
    const [question, setQuestion] = useState(flashcard.question);
    const [answer, setAnswer] = useState(flashcard.answer);

    function handleFlashcardEdit(e){
        e.preventDefault();
        console.log(flashcard);
        dispatch(updateFlashcard(flashcard));
    }
  return (
    <div>
        <h3>Edit the flashcard's info here</h3>
        <form id='input-form' onSubmit={handleFlashcardEdit} >
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
            <button type="submit">Edit Flashcard</button>
            <br />
            {errors?.map((err) => (
                <p id='errors' key={err}>{err}</p>
            ))}
        </form>
    </div>
  )
}

export default EditFlashcard;