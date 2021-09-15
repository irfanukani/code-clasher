import { combineReducers } from "redux";
import { login } from "./Auth/login";
import { error } from "./errors/error"

export default combineReducers({
    getErrors: error,
    userData: login
});