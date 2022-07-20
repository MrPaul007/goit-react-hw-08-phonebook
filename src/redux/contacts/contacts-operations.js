import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/contacts";

export const fetchContacts = createAsyncThunk(
    "contacts/fetch",
    async(_, {rejectWithValue}) => {
        try {
            const result = await api.getContacts();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async(data, {rejectWithValue}) => {
        try {
            const result = await api.addContact(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {contacts} = getState();
            const { name } = data;
            const isDublicate = contacts.items.find(item => item.name === name);
            if(isDublicate) {
                alert(`${name} is already in contacts`);
                return false;
            }
        }
    }
);

export const removeContact = createAsyncThunk(
    "contacts/remove",
    async(id, {rejectWithValue}) => {
        try {
            const result = await api.removeContact(id);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);