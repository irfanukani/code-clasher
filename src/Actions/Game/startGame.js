import { getDatabase, ref, runTransaction } from "@firebase/database";
import moment from "moment";

export const startTheGame = (gameId) => dispatch => {
    const db = getDatabase();
    const gameRef = ref(db, '/games/' + gameId);
    runTransaction(gameRef, (data) => {
        if (data) {
            data.isGameStarted = true;
            data.startTime = moment().toString();
        }
        return data
    });
}