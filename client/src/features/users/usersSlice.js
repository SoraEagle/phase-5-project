import {v4 as uuid} from "uuid";
import { createSlice } from "@reduxjs/toolkit";
// Action Creators
const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: [], // Array of Users
    },
    // Reducers
    reducers: {
        userAdded(state, action){
            state.entities.push({id: uuid(), ...action.payload});
        },
    },
});

export const {userAdded} = usersSlice.actions;
export default usersSlice.reducer;