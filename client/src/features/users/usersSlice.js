import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Action Creators
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    return fetch("/me") //Needs an URL!!! "/me"?
        .then((r) => r.json())
        .then((data) => data.users);
}); 

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [], // Array of Users
        status: "idle", // loading state
        errors: null
    },
    reducers: {
        userAdded(state, action){ // Used to create an new User
            debugger
            state.users.push({user: action.payload});
            console.log("User: ", action.payload);
        },
    },
});

export const {userAdded} = usersSlice.actions;
export default usersSlice.reducer;