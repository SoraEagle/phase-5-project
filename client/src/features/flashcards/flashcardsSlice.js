import { createSlice } from "@reduxjs/toolkit";
// Action Creators
// fetchFlashcards

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [], // Array of Flashcards
        status: "idle",
    },
    // Reducers
    reducers: {
        flashcardAdded(state, action){
            state.flashcards.push(action.payload);
        },
        flashcardRemoved(state, action){
            // const index = state.entites.findIndex((f) => f.id === action.payload);
            // state.entites.splice(index, 1);
        },
    },
});

export const {flashcardAdded, flashcardRemoved} = flashcardsSlice.actions;
export default flashcardsSlice.reducer;