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
        status: "idle", // Used to check if an action creator is running
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchFlashcards.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchFlashcards.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors){
                    state.errorMessages = action.payload.errors;
                }
            })
            .addCase(newFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
            .addCase(updateFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
            .addCase(removeFlashcard.pending, (state) => {
                state.status = 'pending';
            })
    }
});

export default flashcardsSlice.reducer;