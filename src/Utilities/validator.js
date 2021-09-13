import { createError } from "../Actions/Errors/handleErrors";

export const isValid = (user = {}) => dispatch => {
    if (user.email === undefined || user.email === null) {
        dispatch(createError('Please Enter a Valid Email'));
        return;
    }
    if (user.password === undefined || user.password === null) {
        dispatch(createError('Please Enter a Valid Password'));
        return;
    }

    //Login Dispatch
}