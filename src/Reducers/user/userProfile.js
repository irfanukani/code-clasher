import { PROFILE_FETCH_SUCCESS } from "../../Actions/types";

export const getUserProfile = (userProfile = null, action) => {
    const { type, payload } = action;
    switch (type) {
        case PROFILE_FETCH_SUCCESS:
            return { profile: payload }
        default:
            return userProfile;
    }
}