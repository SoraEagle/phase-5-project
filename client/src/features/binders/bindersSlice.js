import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
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

// export const removeFlashcard = createAsyncThunk("flashcards/removeFlashcard", async (payload) => {
//     return fetch (`/flashcards/${payload.id}`, {
//         method: "DELETE"
//     }).then((r) => {})
// });

const bindersSlice = createSlice({
    name: "binders",
    initialState: {
        entities: [],
        errorMessages: null,
        status: "idle", // Used to check if an action creator is running
    },
    reducers: {
        // flashcardRemoved(state, action){
        //     const index = state.entities.findIndex(f => f.id === action.payload);
        //     state.entities.splice(index, 1);
        // },
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
                console.log(action.payload);
                console.log(action.payload.errors);

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
                                    console.log("updatedFlashcards: ", updatedFlashcards);
                                    return {
                                        ...deck, 
                                        flashcards: updatedFlashcards
                                    };
                                } else return deck;
                            });
                            console.log("updatedDecks: ", updatedDecks);
                            return {
                                ...binder,
                                decks: updatedDecks
                            };
                        } else return binder;
                    });
                    console.log("updatedBinders: ", updatedBinders);
                    state.entities = updatedBinders;
                }
            })
            .addCase(removeFlashcard.fulfilled, (state, action) => {
                state.status = 'idle';
                console.log(action.payload);

                if(!action.payload.errors){
                    state.errorMessages = null;

                    state.entities.map(binder => {
                        const thisDeck = binder?.decks.find(myDeck => {
                            return myDeck.id === action.payload.deck?.id;
                        });
                        console.log(thisDeck);
                    });
                }
            })
    }
});

export default bindersSlice.reducer;