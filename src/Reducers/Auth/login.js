import moment from "moment";
import { LOGIN_SUCCESS, LOGOUT, SIGNUP_SUCCESS } from "../../Actions/types";

function getUserData() {
    var userInfo = null;
    var match = document.cookie.match(new RegExp("(^| )" + "user" + "=([^;]+)"));

    if (match) {
        const checkInfo = JSON.parse(match[2]);
        //check if cookies are valid
        if (moment(checkInfo?.expireAt).isAfter(moment())) {
            userInfo = checkInfo;
        }
    }
    return userInfo
}


export const login = (userData = getUserData(), action) => {
    const { type, payload } = action;
    switch (type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            sessionStorage.setItem('token', payload.token);
            sessionStorage.setItem('id', payload._id)
            document.cookie = `user=${JSON.stringify({
                ...payload,
                expireAt: moment().add(12, "hours"),
            })}; secure;`;
            return payload;
        case LOGOUT:
            document.cookie = `user = {}`;
            sessionStorage.removeItem('token');
            return null
        default:
            return userData
    }
}