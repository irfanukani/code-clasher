import { combineReducers } from "redux";
import { getUserProfile } from "./user/userProfile";
import { login } from "./Auth/login";
import { error } from "./errors/error"
import { getGameInfo } from "./Game/getGameInfo";
import { getQuestions } from "./Question/getQuestions";
import { getCode } from "./Game/getCode";

export default combineReducers({
    getErrors: error,
    userData: login,
    userProfile: getUserProfile,
    gameInfo: getGameInfo,
    questions: getQuestions,
    code: getCode
});