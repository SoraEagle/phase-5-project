import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newDeck } from "../decks/decksSlice";
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

// Add PATCH action creators for Decks and Flashcards
// export const updateFlashcard = createAsyncThunk("binders/updateFlashcard", async () => {});

// Add DELETE action creators for Decks and Flashcards

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        entities: [], // Array of Binders
        errorMessages: null,
        status: "idle",
    },
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchBinders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBinders.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entities = action.payload;
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
                }
            })
            .addCase(newDeck.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newDeck.fulfilled, (state, action) => {
                state.status = 'idle';
                const deck = action.payload;
                const binder = deck.binder;
                if(!action.payload.errors){
                    state.errorMessages = null;

                    const thisBinder = state.entities.find(myBinder => {
                        return myBinder.id === binder.id;
                    });
                    thisBinder.decks.push(action.payload);
                }
            })
    }
});

export default bindersSlice.reducer;