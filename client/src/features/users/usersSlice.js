import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

// Action Creators
export const fetchUser = createAsyncThunk("users/fetchUsers", async () => {
    return fetch("/me")
    .then((r) => r.json())
});

export const signup = createAsyncThunk("users/signup", async ({username, password}) => {
    return fetch("/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({user: {username, password}})
    }).then((data) => data.json())
});

export const login = createAsyncThunk("users/login", async ({username, password}) => {
    return fetch("/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({user: {username, password}})
    }).then((user) => user.json())
});

export const logout = createAsyncThunk("users/logout", async () => {
    return fetch("/logout", {
        method: "DELETE"
    }).then((user) => user.json())
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,  // This should be an SINGLE User Object!!!
        errorMessages: null,
        status: 'idle',
    },
    reducers: {
        userSignup(state, action){
            state.entities = action.payload;
        },
        userLogin(state, action){
            state.entities = action.payload;
        },
        userLogout(state){
            state.entities = {};
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchUser.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entities = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(login.fulfilled, (state, action) => {
                state.status = 'idle';
                if(action.payload.errors){
                    state.errorMessages = action.payload.errors;
                    console.log(state.errorMessages);
                } else{
                    state.errorMessages = null;
                    state.entities = action.payload;
                }
                console.log(action.payload);
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'idle';
                if (action.payload.errors){
                    state.errorMessages = action.payload.errors;
                } else{
                    state.errorMessages = null;
                    state.entities = action.payload;
                }
                console.log(action.payload);
            })
    }
});

export const {userSignup, userLogin, userLogout} = usersSlice.actions;
export default usersSlice.reducer;