import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateFlashcard } from './flashcardsSlice';

function EditFlashcard({flashcard, onExitForm}){
    const dispatch = useDispatch();
    const errors = useSelector(state => state.flashcards.errorMessages);
    const params = useParams();
    const [question, setQuestion] = useState(flashcard.question);
    const [answer, setAnswer] = useState(flashcard.answer);

    function handleFlashcardEdit(e){
        e.preventDefault();
        const updatedFlashcard = {
            id: flashcard.id,
            question: question,
            answer: answer
        }
        const payload = {
            flashcard: updatedFlashcard,
            binder_id: params.binder_id,
            deck_id: params.id
        }
        console.log(flashcard);
        console.log(question);
        console.log(answer);
        dispatch(updateFlashcard(payload));
        onExitForm();
    }
    console.log("New question: ", question);
    console.log("Original question: ", flashcard.question);
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
                <button type="submit">Save Edits</button>
                <br />
                {errors?.map((err) => (
                    <p id='errors' key={err}>{err}</p>
                ))}
            </form>
        </div>
    )
}

export default EditFlashcard;