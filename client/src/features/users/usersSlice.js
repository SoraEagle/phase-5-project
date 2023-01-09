import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

// Action Creators
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    return fetch("/me")
    .then((r) => r.json())
    .then((data) => data.user);
});

export const signup = createAsyncThunk("users/signup", async (dispatch, {username, password}, thunkAPI) => {
    // debugger
    await fetch("/signup", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({user: {username, password}})
    }).then((data) => {
        data.json().then((data) => {
            debugger
            if(data.errors){
                return thunkAPI.rejectWithValue(data.errors);
            } else{
                // Find a way to set currentUser!!!
                return data;
            }
        })
    })
});

// Create an login method as well!!!
export const login = createAsyncThunk("users/login", async ({username, password}, thunkAPI) => {
    debugger
    fetch("/login", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({username, password})
    }).then((user) => {
        user.json().then((user) => {
            if(user.errors) return thunkAPI.rejectWithValue(user.errors);
            else{
                // Find a way to set currentUser!!!
                return user;
            }
        })
    })
});

/* export const logout = createAsyncThunk("users/logout", async (dispatch, thunkAPI) => {
    const response = await fetch("/logout", {
        method: "DELETE"}).then((r) => {
            if(r.ok) dispatch(userLogout());
    });
}) */

const usersSlice = createSlice({
    name: "users",
    initialState: {
        user: [],  // This should be an SINGLE User Object!!!
        errorMessage: null,
        status: 'idle',
    },
    reducers: {
        userLogin(state, action){
            state.user.push(action.payload);
        },
        userLogout(state){
            state.user = [];
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(login.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.status = 'idle';
                state.errorMessage = null;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.status = 'failed';
                state.errorMessage = action.payload.errors;
            })
    }
});

// export const userSelector = state => state.user;
// export const getUserErrors = state => state.errorMessage;
export const {userLogin, userLogout} = usersSlice.actions;
export default usersSlice.reducer;