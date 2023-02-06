import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
    }
});

export default decksSlice.reducer;