import { useAPI } from "../../Hooks/UseAPI";
import { PROFILE_FETCH_SUCCESS } from "../types";

export const getUserProfile = () => async dispatch => {
    const id = sessionStorage.getItem('id');
    const { data, error } = await useAPI(`/user/${id}`, 'GET', {});
    console.log("USER_PROFILE_LOADED");
    localStorage.setItem("user", JSON.stringify(data?.data));
    dispatch({ type: PROFILE_FETCH_SUCCESS, payload: data?.data });
}