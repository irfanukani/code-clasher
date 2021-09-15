import { LOGIN_SUCCESS } from "../../Actions/types";

export const login = (userData = null, action) => {
    const { type, payload } = action;
    switch (type) {
        case LOGIN_SUCCESS:
            return payload;
        default:
            return userData
    }
}