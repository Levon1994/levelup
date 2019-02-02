import firebase from "firebase";

const config = {
    apiKey: "AIzaSyABMtdKTFzTGyehxP1MIr_kiRjAOS3iHMI",
    authDomain: "level-up-215008.firebaseapp.com",
    databaseURL: "https://level-up-215008.firebaseio.com",
    projectId: "level-up-215008",
    storageBucket: "level-up-215008.appspot.com",
    messagingSenderId: "986543339762"
};

export default () => firebase.initializeApp(config);
