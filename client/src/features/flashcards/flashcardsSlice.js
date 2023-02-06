import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";
//  USE FULL CRUD!!!
export const fetchFlashcards = createAsyncThunk("decks/fetchDecks", async () => {
    return fetch("/flashcards")
    .then((r) => r.json())
    .then((data) => data);
});
export const newFlashcard = createAsyncThunk("decks/newDeck", async (payload) => {
    return fetch(`/decks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [], // Array of Flashcards
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        flashcardAdded(state, action){
            state.flashcards.push(action.payload);
        },
        flashcardRemoved(state, action){
            // const index = state.entites.findIndex((f) => f.id === action.payload);
            // state.entites.splice(index, 1);
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchFlashcards.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchFlashcards.fulfilled, (state, action) => {
                state.status = 'idle';
                state.flashcards = action.payload;
            })
    }
});

export const {flashcardAdded, flashcardRemoved} = flashcardsSlice.actions;
export default flashcardsSlice.reducer;