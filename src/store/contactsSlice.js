import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
    contacts: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        number,
                        id: nanoid(),
                    },
                };
            },
        },
        deleteContact: {
            reducer(state, action) {
                const i = state.contacts.findIndex(
                    contact => contact.id === action.payload
                );
                state.contacts.splice(i, 1);
            },
        },
    },
});

const persistConfig = {
    key: 'contacts',
    storage,
    whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;

// export const { contactsReducer } = contactsSlice.reducer;
