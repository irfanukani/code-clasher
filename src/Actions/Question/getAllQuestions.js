import { useAPI } from "../../Hooks/UseAPI";
import { createError } from "../Errors/handleErrors";
import { CREATE_ERROR, QUESTIONS_FETCHED } from "../types";

export const getAllQuestions = () => async dispatch => {
    const { data, error } = await useAPI(`/ques/getAllque`, 'GET');
    if (error) {
        dispatch(createError("Unable to fetch Problems!"));
    }
    else {
        dispatch({ type: QUESTIONS_FETCHED, payload: data.data })
    }
}