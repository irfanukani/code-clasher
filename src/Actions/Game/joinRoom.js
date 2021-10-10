import { getDatabase, ref, runTransaction } from "firebase/database";
import { getRoomInfo } from "./getRoomInfo";

export const joinRoom = (email, profilePic, gameId) => async dispatch => {
    console.log(email)
    console.log("Join Called")
    const db = getDatabase();
    const gameRef = ref(db, '/games/' + gameId);
    runTransaction(gameRef, (people) => {
        if (people) {
            let alreadyIn = people.joinedPeople.filter((p) => {
                return p.email === email;
            })
            if (alreadyIn?.length === 0) {
                console.log("Concat")
                let x = [...people.joinedPeople, { email: email, profilePic: profilePic }];
                console.log(x)
                people.joinedPeople = x;
            }

        }
        return people
    });
    dispatch(getRoomInfo(gameId));
}