import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

export const fetchFlashcards = createAsyncThunk("flashcards/fetchFlashcards", async () => {
    return fetch("/flashcards")
    .then((r) => r.json())
    .then((data) => data);
});

export const newFlashcard = createAsyncThunk("flashcards/newFlashcard", async (payload) => {
    return fetch(`/flashcards`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

export const updateFlashcard = createAsyncThunk("flashcards/updateFlashcard", async (payload) => {
    return fetch(`/flashcards/${payload.flashcard.id}`, {
        method: "PATCH",
        headers: headers,
        body: JSON.stringify(payload.flashcard)
    }).then((r) => r.json())
});

export const removeFlashcard = createAsyncThunk("flashcards/removeFlashcard", async (payload) => {
    return fetch (`/flashcards/${payload.id}`, {
        method: "DELETE"
    }).then((r) => r.json())
});

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        entities: [],
        errorMessages: null,
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchFlashcards.fulfilled, (state, action) => {
                if(action.payload.errors){
                    state.errorMessages = action.payload.errors;
                }
            })
            .addCase(newFlashcard.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
            .addCase(updateFlashcard.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
    }
});

export default flashcardsSlice.reducer;