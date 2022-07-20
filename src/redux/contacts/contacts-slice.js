import { createSlice } from "@reduxjs/toolkit";

import {fetchContacts, addContact, removeContact} from "./contacts-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    extraReducers: {
        [fetchContacts.pending]: (store) => ({...store, loading: true, error: null}),
        [fetchContacts.fulfilled]: (store, {payload}) => {
            store.items = payload;
            store.loading = false;
        },
        [fetchContacts.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [addContact.pending]: (store) => ({...store, loading: true, error: null}),
        [addContact.fulfilled]: (store, {payload}) => {
            store.items.push(payload);
            store.loading = false;
        },
        [addContact.rejected]: (store, {payload}) => ({...store, loading: false, error: payload}),
        [removeContact.pending]: (store) => {
            store.loading = true;
            store.error = null;
        },
        [removeContact.fulfilled]: (store, {payload}) => {
            store.items = store.items.filter(item => item.id !== payload.id);
            store.loading = false;
        },
        [removeContact.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        }
    }
});

export default contactsSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const initialState = {
//         items: [],
//         filter: "",
// }

// const contacts = createSlice({
//     name: "contacts",
//     initialState,
//     reducers: {
//         add: {
//             reducer: (store, { payload }) => {
//                 store.items.push(payload);
//             },
//             prepare: (data) => {
//                 return {
//                     payload: { ...data, id: nanoid() }
//                 }
//             },
//         },
//         remove: (store, { payload }) => {
//             store.items = store.items.filter(item => item.id !== payload)
//         },
//         changeFilter: (store, {payload}) => {
//             store.filter = payload;
//         }
//     }
// });

// export const {add, remove, changeFilter} = contacts.actions;

// export default contacts.reducer;