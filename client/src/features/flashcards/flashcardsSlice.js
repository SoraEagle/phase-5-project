import {v4 as uuid} from "uuid";
import { createSlice } from "@reduxjs/toolkit";
// Action Creators
const flashcardsSlice = createSlice({
    name: "flashcards",
    initialState: {
        entities: [], // Array of Flashcards
    },
    // Reducers
    reducers: {
        flashcardAdded(state, action){
            state.entities.push({id: uuid(), ...action.payload});
        },
        flashcardRemoved(state, action){
            const index = state.entites.findIndex((f) => f.id === action.payload);
            state.entites.splice(index, 1);
        },
    },
});

export const {flashcardAdded, flashcardRemoved} = flashcardsSlice.actions;
export default flashcardsSlice.reducer;