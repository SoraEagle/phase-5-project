import {v4 as uuid} from "uuid";
import { createSlice } from "@reduxjs/toolkit";
// Action Creators
const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        entities: [], // Array of Binders
    },
    // Reducers
    reducers: {
        binderAdded(state, action){
            state.entities.push({id: uuid(), ...action.payload});
        },
    },
});

export const {binderAdded} = bindersSlice.actions;
export default bindersSlice.reducer;