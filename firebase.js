// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVjtXraXJVOMJAO-fCiKNCcjfTNQJhDdk",
  authDomain: "picku-project.firebaseapp.com",
  projectId: "picku-project",
  storageBucket: "picku-project.appspot.com",
  messagingSenderId: "566510853289",
  appId: "1:566510853289:web:c7742cad46fe127d611db8"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
};

const auth = firebase.auth();
const db = firebase.firestore();

export { auth,db };

