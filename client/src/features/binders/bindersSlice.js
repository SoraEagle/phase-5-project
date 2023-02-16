import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { newDeck } from "../decks/decksSlice";
import { newFlashcard, updateFlashcard, removeFlashcard } from "../flashcards/flashcardsSlice";
import { headers } from "../../Globals";

export const fetchBinders = createAsyncThunk("binders/fetchBinders", async () => {
    return fetch("/binders")
    .then((r) => r.json())
    .then((data) => data);
});

export const newBinder = createAsyncThunk("binders/newBinder", async (binder) => {
    return fetch("/binders", {
        method: "POST",
        headers: headers,
        body:JSON.stringify({binder})
    }).then((r) => r.json())
});

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        entities: [],
        errorMessages: null,
        status: "idle",
    },
    reducers: {
        flashcardRemoved(state, action){
            const myBinders = state.entities.map(binder => {
                if(binder.id === action.payload.deck?.binder_id){
                    const myDecks = binder?.decks.map(deck => {
                        if(deck.id === action.payload.deck.id){
                            const myFlashcards = deck?.flashcards.filter(flashcard => flashcard.id !== action.payload.id);
                            return {
                                ...deck, 
                                flashcards: myFlashcards
                            };
                        } else return deck;
                    });
                    return {
                        ...binder,
                        decks: myDecks
                    };
                } else return binder;
            });
            state.entities = myBinders;
        },
    },
    extraReducers(builder){
        builder
            .addCase(fetchBinders.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBinders.fulfilled, (state, action) => {
                state.status = 'idle';
                state.entities = action.payload;
            })
            .addCase(newBinder.fulfilled, (state, action) => {
                state.status = "idle";
                if(action.payload.errors) state.errorMessages = action.payload.errors;
                else{
                    state.errorMessages = null;
                    state.entities.push(action.payload);
                }
            })
            .addCase(newDeck.fulfilled, (state, action) => {
                state.status = 'idle';
                const deck = action.payload;
                const binder = deck.binder;
                if(!action.payload.errors){
                    state.errorMessages = null;

                    const thisBinder = state.entities.find(myBinder => {
                        return myBinder.id === binder.id;
                    });
                    thisBinder.decks.push(action.payload);
                }
            })
            .addCase(newFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';

                if(!action.payload.errors){
                    state.errorMessages = null;

                    state.entities.map(binder => {
                        const thisDeck = binder?.decks.find(myDeck => {
                            return myDeck.id === action.payload.deck.id;
                        });
                        return thisDeck?.flashcards.push(action.payload);
                    });
                }

                
            })
            .addCase(updateFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';

                if(!action.payload.errors){
                    const updatedBinders = state.entities.map(binder => {
                        if(binder.id === action.payload.deck?.binder_id){
                            const updatedDecks = binder?.decks.map(deck => {
                                if(deck.id === action.payload.deck.id){
                                    const updatedFlashcards = deck?.flashcards.map(flashcard => {
                                        if(flashcard.id === action.payload.id){
                                            return action.payload;
                                        } else return flashcard;
                                    });
                                    return {
                                        ...deck, 
                                        flashcards: updatedFlashcards
                                    };
                                } else return deck;
                            });
                            return {
                                ...binder,
                                decks: updatedDecks
                            };
                        } else return binder;
                    });
                    state.entities = updatedBinders;
                }
            })
            .addCase(removeFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';

                if(!action.payload.errors){
                    state.errorMessages = null;
                }
            })
    }
});

export const {flashcardRemoved} = bindersSlice.actions;
export default bindersSlice.reducer;