import { useAPI } from "../../Hooks/UseAPI"

export const submit = (code) => dispatch => {
    const obj = {
        code: code,
        gameId: JSON.parse(sessionStorage.getItem('gameInfo'))?.gameId,
        questionId: JSON.parse(sessionStorage.getItem('gameInfo'))?.questionId,
        email: JSON.parse(localStorage.getItem("user"))?.email

    }
    const { data } = useAPI('/compiler/run', 'POST', obj);
    // console.log(obj.code)

}