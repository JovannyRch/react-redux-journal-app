
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCaK39rgAozRNOtxwobd94wZsJ9W_u3DJo",
    authDomain: "app-arquitectura-43da8.firebaseapp.com",
    databaseURL: "https://app-arquitectura-43da8.firebaseio.com",
    projectId: "app-arquitectura-43da8",
    storageBucket: "app-arquitectura-43da8.appspot.com",
    messagingSenderId: "1061613567644",
    appId: "1:1061613567644:web:f30a21c8a7231d1dfb7759",
    measurementId: "G-N9NPF7HG4P"
};


firebase.initializeApp(firebaseConfig);

const DB = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    DB,
    googleAuthProvider,
    firebase
}