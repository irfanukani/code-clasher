import axios from "axios";
import { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useAPI } from "../../Hooks/UseAPI";
import { createError } from "../Errors/handleErrors";

export const updateProfile = (profileData) => async dispatch => {
    const firebaseApp = getApp();
    const storage = getStorage(firebaseApp, "gs://codeclasher.appspot.com");
    const storageRef = ref(storage, profileData.username);

    await uploadBytes(storageRef, profileData.profileImage).then((snapshot) => {
        console.log('Uploaded a blob or file!');
        console.log(snapshot)
    });
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id')
    const { data, error } = useAPI(`/user/${id}`, 'PUT', { token: token, frdList: [], bio: '', profilePic: `https://firebasestorage.googleapis.com/v0/b/codeclasher.appspot.com/o/${profileData.username}?alt=media` });

    if (data) {
        createError('Done');
        console.log(data)
    }

}