import { getDatabase, onValue, ref } from "@firebase/database";

export const getRoomInfo = (gameID) => async dispatch => {
    const db = getDatabase();
    const starCountRef = ref(db, 'games/' + gameID);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        dispatch({ type: 'ROOM_DATA_UPDATED', payload: data });
		sessionStorage.setItem("gameInfo" , JSON.stringify(data));
    });
}