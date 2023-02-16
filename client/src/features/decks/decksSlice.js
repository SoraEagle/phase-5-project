import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

export const newDeck = createAsyncThunk("decks/newDeck", async (payload) => {
    return fetch(`/decks`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload)
    }).then((r) => r.json())
});

const decksSlice = createSlice({
    name: "decks",
    initialState: {
        entities: [],
        errorMessages: null,
    },
    extraReducers(builder){
        builder
            .addCase(newDeck.fulfilled, (state, action) => {
                if(action.payload.errors) state.errorMessages = action.payload.errors;
            })
    }
});

export default decksSlice.reducer;