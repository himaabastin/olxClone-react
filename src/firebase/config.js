import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'  
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDYJHyg9MVeXrWojOBfhHTVXyQWPXAGVVY",
    authDomain: "olx-clone-79d32.firebaseapp.com",
    projectId: "olx-clone-79d32",
    storageBucket: "olx-clone-79d32.appspot.com",
    messagingSenderId: "932762694307",
    appId: "1:932762694307:web:9650c6de66bd9829740516",
    measurementId: "G-MCN4RC6SVY"
  };

export default firebase.initializeApp(firebaseConfig)