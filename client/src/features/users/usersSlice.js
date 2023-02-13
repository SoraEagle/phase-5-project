import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newFlashcard } from "../flashcards/flashcardsSlice";
import { headers } from "../../Globals";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
    return fetch("/me")
    .then((r) => r.json())
    .then((data) => data);
});

export const signup = createAsyncThunk("users/signup", async ({username, password}) => {
    return fetch("/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({username, password})
    }).then((data) => data.json())
});

export const login = createAsyncThunk("users/login", async ({username, password}, {rejectWithValue}) => {
    return fetch("/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({username, password})
    }).then((data) => data.json())
});

export const logout = createAsyncThunk("users/logout", async () => {
    return fetch("/logout", {
        method: "DELETE"
    })
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,
        errorMessages: null,
        status: 'idle',
    },
    reducers: {
        reset(state){
            state.errorMessages = null;
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entities = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.entities = action.payload;
                    state.errorMessages = null;
                }
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.errorMessages = null;
                    state.entities = action.payload;
                }
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.status = 'idle';
                state.errorMessages = null;
                state.entities = null;
                action.payload = null;
            })
            .addCase(newFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';
                const flashcard = action.payload;
                const deck = flashcard.deck;
                console.log(deck);
                if(!action.payload.errors){
                    state.errorMessages = null;
                    console.log(deck.flashcards);

                    const thisDeck = state.entities.find(myDeck => {
                        return myDeck.id === deck.id;
                    });
                    thisDeck?.flashcards.push(action.payload);
                }
            })
    }
});

export const {reset} = usersSlice.actions;
export default usersSlice.reducer;