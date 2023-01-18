import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

// Action Creators
export const fetchBinders = createAsyncThunk("binders/fetchBinders", async () => {
    return fetch("/binders")
    .then((r) => r.json())
    .then((data) => data);
});
export const newBinder = createAsyncThunk("binders/newBinder", async (newBinder) => {
    return fetch(`/binders`, {
        method: "POST",
        headers: headers,
        body:JSON.stringify()
    }).then((binder) => binder.json(newBinder))
});

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        binders: [], // Array of Binders
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        binderAdded(state, action){
            state.binders.push({name: action.payload});
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchBinders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBinders.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);
            })
            .addCase(newBinder.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newBinder.fulfilled, (state, action) => {
                state.status = "idle";
                if(action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.errorMessages = null;
                    console.log(action.payload);
                }
            })
    }
});

export const {binderAdded} = bindersSlice.actions;
export default bindersSlice.reducer;