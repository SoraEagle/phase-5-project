import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newFlashcard } from "../flashcards/flashcardsSlice";
import { headers } from "../../Globals";
export const newDeck = createAsyncThunk("decks/newDeck", async (payload) => {
    return fetch(`/decks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});
// export const updateDeck = createAsyncThunk("binders/updateDeck", async () => {});

const decksSlice = createSlice({
    name: "decks",
    initialState: {
        entities: [], // Array of Decks
        errorMessages: null,
        status: "idle",
    },
    extraReducers(builder){
        builder
            .addCase(newDeck.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newDeck.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
            .addCase(newFlashcard.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(newFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';
                const flashcard = action.payload;
                const deck = flashcard.deck;
                if(!action.payload.errors){
                    state.errorMessages = null;

                    const thisDeck = state.entities.find(myDeck => {
                        return myDeck.id === deck.id;
                    });
                    thisDeck.flashcards.push(action.payload);
                    // Use breakpoints and console.log to double check
                }
            })
    }
});

export default decksSlice.reducer;