import firebase from "firebase/app"
import "firebase/firestore";
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBgUHKOazdZxzNVVGqpeqVNiOVbKBlkICM",
    authDomain: "reactclintpanel-c63ab.firebaseapp.com",
    projectId: "reactclintpanel-c63ab",
    storageBucket: "reactclintpanel-c63ab.appspot.com",
    messagingSenderId: "733911963956",
    appId: "1:733911963956:web:8b42f7c2fa596f8fb02d61",
    measurementId: "G-M5YPXWK1ZQ"
  }

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;