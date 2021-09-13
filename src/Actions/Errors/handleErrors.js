import { CREATE_ERROR, DELETE_ERROR } from "../types";

export const createError = (message) => dispatch => {
    dispatch({ type: CREATE_ERROR, payload: message });
}

export const deleteErrors = () => dispatch => {
    dispatch({ type: DELETE_ERROR });
}