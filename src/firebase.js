// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB-FyLl9pjEvOh4p2jemp9H5Y7wZ9lE8W8",
    authDomain: "codeclasher.firebaseapp.com",
    projectId: "codeclasher",
    storageBucket: "codeclasher.appspot.com",
    messagingSenderId: "496283524497",
    appId: "1:496283524497:web:741ce46c5c5cdc7cb88e30",
    measurementId: "G-RLX0P38FYX",
    databaseURL: "https://codeclasher-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);