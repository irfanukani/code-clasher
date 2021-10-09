import { combineReducers } from "redux";
import { getUserProfile } from "./user/userProfile";
import { login } from "./Auth/login";
import { error } from "./errors/error"
import { getGameInfo } from "./Game/getGameInfo";

export default combineReducers({
    getErrors: error,
    userData: login,
    userProfile: getUserProfile,
    gameInfo: getGameInfo
});