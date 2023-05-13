import { configureStore, combineReducers } from "@reduxjs/toolkit";

import contactReducer from "./ContactsReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  white: ["contact"], //save only reducers
};

const rootReducer = combineReducers({
  contact: contactReducer,
});

const persisterReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persisterReducer,
  middleware: [thunk],
});

export default store;
