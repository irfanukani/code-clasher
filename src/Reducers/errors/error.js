import { CREATE_ERROR, DELETE_ERROR } from "../../Actions/types";

export const error = (errors = null, action) => {
    const { type, payload } = action;
    switch (type) {
        case CREATE_ERROR:
            return { message: payload }
        case DELETE_ERROR:
            return null;
        default:
            return errors;
    }
}