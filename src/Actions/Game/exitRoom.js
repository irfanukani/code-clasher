import { getDatabase, ref, runTransaction } from "@firebase/database";

export const exitRoom = (email, roomId) => dispatch => {
    const db = getDatabase();
    const gameRef = ref(db, '/games/' + roomId);

    runTransaction(gameRef, (people) => {
        if (people) {
            let alreadyIn = people.joinedPeople.filter((p) => {
                return p.email !== email;
            })
            if (alreadyIn?.length !== 0) {
                console.log("Concat")
                people.joinedPeople = alreadyIn;
            }

        }
        return people
    });
}