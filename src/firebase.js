import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyDs6DNW0iBMfyx0soNSS-FdKlUsA1t8IpI",
    authDomain: "instagram-clone-7c441.firebaseapp.com",
    databaseURL: "https://instagram-clone-7c441.firebaseio.com",
    projectId: "instagram-clone-7c441",
    storageBucket: "instagram-clone-7c441.appspot.com",
    messagingSenderId: "327733577457",
    appId: "1:327733577457:web:15213450c14922ab3fcb50",
    measurementId: "G-BG6X8SJZT9"
});

const database = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { database, auth, storage };