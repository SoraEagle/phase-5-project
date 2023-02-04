import { createAsyncThunk, createReducer, createSlice, current } from "@reduxjs/toolkit";
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

export const newDeck = createAsyncThunk("binders/newDeck", async (payload) => {
    return fetch(`/decks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

// Add PATCH action creators for Decks and Flashcards
// export const updateDeck = createAsyncThunk("binders/updateDeck", async () => {});
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
                }
            })
            .addCase(newDeck.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newDeck.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.errorMessages = null;
                    console.log(action.payload);
                    const deck = action.payload;
                    const binder = deck.binder;
                    
                    console.log(binder.decks); // Shows that the new Deck object is ALREADY in the Array in the backend...
                    console.log('before: ', current(state.entities));
                    // state.entities.push(action.payload);
                    console.log('after: ', current(state.entities));
                }
            })
    }
});

export default bindersSlice.reducer;