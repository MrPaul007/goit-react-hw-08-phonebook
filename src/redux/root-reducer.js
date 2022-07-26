import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsSlice from "./contacts/contacts-slice";
import authReducer from "./auth/auth-slice";

const persistConfig = {
    key: 'token',
    storage,
    whitelist: ["token"]
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);


const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    contacts: contactsSlice,
})

export default rootReducer;