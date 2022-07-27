import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, removeContact, addContact } from './contacts-operation';

const initialState = { items: [], loading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [fetchContacts.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchContacts.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [fetchContacts.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload,
    }),

    [addContact.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [addContact.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [addContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: [...store.items, payload],
    }),

    [removeContact.pending]: store => ({
      ...store,
      loading: true,
      error: null,
    }),
    [removeContact.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload.message,
    }),
    [removeContact.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: store.items.filter(el => el.id !== payload),
    }),
  },
});

export default contactsSlice.reducer;
