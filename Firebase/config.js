//the lecture
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCeOytuIxNGchrGq4CrZq4cpohiIX9uYg",
    authDomain: "testing-123-c16fc.firebaseapp.com",
    projectId: "testing-123-c16fc",
    storageBucket: "testing-123-c16fc.appspot.com",
    messagingSenderId: "934001709223",
    appId: "1:934001709223:web:3a1ce8022d26e440b30b82",
    measurementId: "G-3L5DFDF70R"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }


// me
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmXPkM6xq4a2d-OBVo1aAeNx9PkiE3eos",
    authDomain: "clean9-app-23913.firebaseapp.com",
    projectId: "clean9-app-23913",
    storageBucket: "clean9-app-23913.appspot.com",
    messagingSenderId: "868306793259",
    appId: "1:868306793259:web:96c643c6090f8373a7cb6e",
    measurementId: "G-F76D6GMPXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };