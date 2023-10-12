import { combineReducers } from "redux";
import eventReducer from "./event";

export const rootReducer = combineReducers({
    event: eventReducer
})