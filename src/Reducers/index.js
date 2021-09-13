import { combineReducers } from "redux";
import { error } from "./errors/error"

export default combineReducers({
    getErrors: error,
});