import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
var firebaseConfig = {
    apiKey: "AIzaSyB4OmySsg7Fj1X-xVKultUSitjuEqbqgCA",
    authDomain: "login-f01f1.firebaseapp.com",
    projectId: "login-f01f1",
    storageBucket: "login-f01f1.appspot.com",
    messagingSenderId: "1071159405705",
    appId: "1:1071159405705:web:f3069bc743e689e5b92a58",
    measurementId: "G-GM4MD7B55Y"
  };

  
  firebase.initializeApp(firebaseConfig)
  export {firebase}
