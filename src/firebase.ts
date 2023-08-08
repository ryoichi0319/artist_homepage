import firebase from "firebase/compat/app"
 import  "firebase/compat/firestore"
 import "firebase/compat/auth"
 

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCvBCo8nVUWbuBnbARTFcotbT8Z5a-d7lA",
    authDomain: "project-68301.firebaseapp.com",
    projectId: "project-68301",
    storageBucket: "project-68301.appspot.com",
    messagingSenderId: "1052568011156",
    appId: "1:1052568011156:web:01d7de11e73495218ccf81",
    measurementId: "G-LLEFYCDZF5"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();

export {db }