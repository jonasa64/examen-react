import firebase from 'firebase/app';
import 'firebase/storage';
var firebaseConfig = {
    apiKey: "AIzaSyBe5tGrEGeH51TWFVO1UYvzC8bP1aYGNUk",
    authDomain: "recipe-images-9a9cc.firebaseapp.com",
    projectId: "recipe-images-9a9cc",
    storageBucket: "recipe-images-9a9cc.appspot.com",
    messagingSenderId: "1008307856815",
    appId: "1:1008307856815:web:cd0e60cf3b15194050bb5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage()