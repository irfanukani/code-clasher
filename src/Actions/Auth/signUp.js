import { useAPI } from "../../Hooks/UseAPI";
import { createError } from "../Errors/handleErrors";
import { getUserProfile } from "../Profile/getUserProfile";
import { SIGNUP_SUCCESS } from "../types";

export const signUp = (userData) => async (dispatch) => {
    const { data, error } = await useAPI('/auth/signup', 'POST', userData);

    if (!data) {
        dispatch(createError('Please fill all the data'));
    }
    else {
        dispatch({ type: SIGNUP_SUCCESS, payload: data.data });
        dispatch(getUserProfile());
    }
}