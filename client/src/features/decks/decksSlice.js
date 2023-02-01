import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

export const fetchDecks = createAsyncThunk("decks/fetchDecks", async () => {
    return fetch("/decks")
    .then((r) => r.json())
    .then((data) => data);
});
export const newDeck = createAsyncThunk("decks/newDeck", async (payload) => {
    return fetch(`/decks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

const decksSlice = createSlice({
    name: "decks",
    initialState: {
        entities: [], // Array of Decks
        errorMessages: null,
        status: "idle",
    },
    extraReducers(builder){
        builder
            .addCase(fetchDecks.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchDecks.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entities = action.payload;
            })
            .addCase(newDeck.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newDeck.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.errorMessages = null;
                    state.entities.push(action.payload);
                }
            })
    }
});

export default decksSlice.reducer;