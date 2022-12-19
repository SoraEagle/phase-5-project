import { createSlice } from "@reduxjs/toolkit";
// Action Creators
// fetchBinders

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        binders: [], // Array of Binders
        status: "idle",
    },
    // Reducers
    reducers: {
        binderAdded(state, action){
            state.binders.push(action.payload);
        },
    },
});

export const {binderAdded} = bindersSlice.actions;
export default bindersSlice.reducer;