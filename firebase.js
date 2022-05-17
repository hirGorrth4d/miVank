// Import the functions you need from the SDKs you need

import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCKgAZQyB7pAd4fmQUOrL-jclYUxK5eizQ",

  authDomain: "mivank.firebaseapp.com",

  projectId: "mivank",

  storageBucket: "mivank.appspot.com",

  messagingSenderId: "770076337897",

  appId: "1:770076337897:web:c7a30e9a5e9619eeec3278"

};


// Initialize Firebase

let app
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
} else {
    app = firebase.app()
}
const auth = firebase.auth()

export {auth}