import { useAPI } from "../../Hooks/UseAPI";
import { createError } from "../Errors/handleErrors";
import { getUserProfile } from "../Profile/getUserProfile";
import { LOGIN_SUCCESS } from "../types";

export const login = (userData) => async (dispatch) => {
    const { data, error } = await useAPI('/auth/login', 'POST', userData);

    if (!data) {
        dispatch(createError('Invalid Username or Password'));
    }
    else {
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });
        dispatch(getUserProfile());
        sessionStorage.setItem("id", data.data._id)
    }
}