import { createSlice } from "@reduxjs/toolkit";
// Action Creators
// fetchDecks

const decksSlice = createSlice({
    name: "decks",
    initialState: {
        decks: [], // Array of Decks
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
});

export const {deckAdded, deckRemoved} = decksSlice.actions;
export default decksSlice.reducer;