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

const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        entities: [],
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        flashcardRemoved(state, action){
            const index = state.entities.findIndex((f) => f.id === action.payload);
            state.entities.splice(index, 1);
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchFlashcards.pending, (state) => {
                state.status = 'pending';
            })
            .addCase(fetchFlashcards.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) {
                    state.errorMessages = action.payload.errors;
                    console.log(action.payload.errors);
                }
            })
    }
});

export const {flashcardRemoved} = flashcardsSlice.actions;
export default flashcardsSlice.reducer;