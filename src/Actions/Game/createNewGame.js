import { getDatabase, set, ref } from "firebase/database";


export const createNewGame = (email, startTime, endTime) => dispatch => {
    const id = sessionStorage.getItem('id');
    const gameId = Math.random().toString(14).slice(3, 8);
    const db = getDatabase();
    const data = {
        hostId: id,
        hostEmail: email,
        gameId: gameId,
        startTime, endTime
    }
    set(ref(
        db, 'games/' + gameId
    ), data);
    sessionStorage.setItem('gameInfo', JSON.stringify(data))
    dispatch({ type: 'GAME_CREATED', payload: data });
}