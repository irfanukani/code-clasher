import { useAPI } from "../../Hooks/UseAPI";
import { createError } from "../Errors/handleErrors";
import { LOGIN_SUCCESS } from "../types";

export const login = (userData) => async (dispatch) => {
    const { data, error } = await useAPI('/auth/login', 'POST', userData);

    if (error) {
        dispatch(createError(error));
    }
    else {
        dispatch({ type: LOGIN_SUCCESS, payload: data.data });
    }
}