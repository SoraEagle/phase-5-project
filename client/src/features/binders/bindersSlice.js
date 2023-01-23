import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

export const fetchBinders = createAsyncThunk("binders/fetchBinders", async () => {
    return fetch("/binders")
    .then((r) => r.json())
    .then((data) => data);
});

export const newBinder = createAsyncThunk("binders/newBinder", async (binder) => {
    return fetch("/binders", {
        method: "POST",
        headers: headers,
        body:JSON.stringify({binder})
    }).then((r) => r.json())
});

// export const updateBinder = createAsyncThunk("binders/updateBinder", async () => {});

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        entities: [], // Array of Binders
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        binderAdded(state, action){
            state.entities.push({name: action.payload});
        },
        // binderRemoved(state, action){ // Is a delete reducer needed?
        //     const index = state.entities.findIndex((b) => b.id === action.payload);
        //     state.entities.splice(index, 1);
        // }
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
                    state.entities.push(action.payload);
                    console.log(action.payload);
                    console.log(state.entities);
                }
            })
    }
});

export const { binderAdded } = bindersSlice.actions;
export default bindersSlice.reducer;