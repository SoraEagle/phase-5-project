import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { headers } from "../../Globals";

// Action Creators
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    return fetch("/me")
    .then((r) => r.json())
    .then((data) => data.user);
}); 

export const signup = createAsyncThunk("users/signup", async ({username, password}, thunkAPI) => {
    try {
        // debugger
        const response = await fetch("/signup", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({user: {username, password}})
        })
        // .then((user) => {
        //     user.json().then((user) => {
        //         console.log(user);
        //     })
        // })

        let data = await response.json();
        console.log("Data: ", data);

        if(response.status === 200){
            return {...data, username, password}
        } else{
            return thunkAPI.rejectWithValue(data);
        }

    } catch (e) {
        console.log("Error", e.response.data);
        return thunkAPI.rejectWithValue(e.response.data);
    }
});

// export const logout = createAsyncThunk("users/logout")

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        isFetching: false,
        isSuccess: false,
        isError: false,
        errorMessage: "",
        status: 'idle',
    },
    reducers: {
        userAdded(state, action){
            state.users.push(action.payload);
        },
        usersLoading(state){
            if(state.status === 'idle') state.status = 'pending'
        },
        usersRecieved(state, action){
            if(state.status === 'pending'){
                state.setAll(state, action.payload);
                state.status = 'idle';
            }
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.errorMessage = action.error.message;
            })
            .addCase(signup.pending, (state) => {
                state.isFetching = true;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.isFetching = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.status = "succeeded";
            })
            .addCase(signup.rejected, (state, action) => {
                state.isFetching = false;
                state.isError = true;
                state.status = 'failed';
                state.errorMessage = action.error.message;
            })
    }
});

export const userSelector = state => state.user;
export const getUsersErrors = state => state.users.error;
export const {userAdded, usersLoading, usersRecieved} = usersSlice.actions;
export default usersSlice.reducer;