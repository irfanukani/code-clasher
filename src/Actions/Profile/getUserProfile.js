import { useAPI } from "../../Hooks/UseAPI";
import { PROFILE_FETCH_SUCCESS } from "../types";

export const getUserProfile = () => async dispatch => {
    const id = sessionStorage.getItem('id');
    const { data, error } = await useAPI(`/user/${id}`, 'GET', {});
    dispatch({ type: PROFILE_FETCH_SUCCESS, payload: data?.data });
}