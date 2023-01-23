import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

// fetchDecks
export const fetchDecks = createAsyncThunk("decks/fetchDecks", async () => {
    return fetch("/decks")
    .then((r) => r.json())
    .then((data) => data);
});

const decksSlice = createSlice({
    name: "decks",
    initialState: {
        entities: [], // Array of Decks
        status: "idle",
    },
    // Reducers
    reducers: {
        deckAdded(state, action){
            return state.decks.push(action.payload);
        },
        deckRemoved(state, action){
            // const index = state.entites.findIndex((d) => d.id === action.payload);
            // state.entites.splice(index, 1);
        },
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
    }
});

export const {deckAdded, deckRemoved} = decksSlice.actions;
export default decksSlice.reducer;