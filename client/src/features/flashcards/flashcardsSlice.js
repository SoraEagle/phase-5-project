import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";
//  USE FULL CRUD!!!
export const fetchFlashcards = createAsyncThunk("flashcards/fetchFlashcards", async () => {
    return fetch("/flashcards")
    .then((r) => r.json())
    .then((data) => data);
});

// Create action creator for fetching ALL flaschcards!!!

export const newFlashcard = createAsyncThunk("flashcards/newFlashcard", async (payload) => {
    return fetch(`/flashcards`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

// export const updateFlashcard = createAsyncThunk("flashcards/updateFlashcard", async () => {});

// Use flashcardRemoved, or create an action creator???

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        flashcards: [], // Array of Flashcards
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        flashcardRemoved(state, action){
            const index = state.flashcards.findIndex((f) => f.id === action.payload);
            state.flashcards.splice(index, 1);
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