import {v4 as uuid} from "uuid";
import { createSlice } from "@reduxjs/toolkit";
// Action Creators
const decksSlice = createSlice({
    name: "decks",
    initialState: {
        entites: [], // Array of Decks
    },
    // Reducers
    reducers: {
        deckAdded(state, action){
            state.entities.push({id: uuid(), ...action.payload});
        },
        deckRemoved(state, action){
            const index = state.entites.findIndex((d) => d.id === action.payload);
            state.entites.splice(index, 1);
        },
    },
});

export const {deckAdded, deckRemoved} = decksSlice.actions;
export default decksSlice.reducer;