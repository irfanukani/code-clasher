import { QUESTIONS_FETCHED } from "../../Actions/types";

export const getQuestions = (questions = [], action) => {
    const { payload, type } = action;
    switch (type) {
        case QUESTIONS_FETCHED:
            return payload;

        default:
            return questions
    }
}