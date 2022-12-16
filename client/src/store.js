import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./features/users/usersSlice";
import bindersReducer from "./features/binders/bindersSlice";
import decksReducer from "./features/decks/decksSlice";
import flashcardsReducer from "./features/flashcards/flashcardsSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        binders: bindersReducer,
        decks: decksReducer,
        flashcards: flashcardsReducer,
    },
});

console.log(store.getState().users);

export default store;