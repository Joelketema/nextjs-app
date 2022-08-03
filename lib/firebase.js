import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAUuAshxixKzoG6VaHVx-hq-zL25EEsJKc",
    authDomain: "nextfire-aa2d3.firebaseapp.com",
    projectId: "nextfire-aa2d3",
    storageBucket: "nextfire-aa2d3.appspot.com",
    messagingSenderId: "534642212177",
    appId: "1:534642212177:web:779b47beb760bd088b2770",
    measurementId: "G-PZREP41Q09"
};

  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }


export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage(); 