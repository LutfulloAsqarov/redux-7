import { combineReducers, legacy_createStore } from "@reduxjs/toolkit";
import { user } from "./reducers/user";

const reducers = combineReducers({
    user,
});

export const store = legacy_createStore(reducers);
