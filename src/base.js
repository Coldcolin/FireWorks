// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/'

const firebaseConfig = {
    apiKey: "AIzaSyBVnRX6K9zMGJ4gACK5-1ob1B7E9gmPZ68",
    authDomain: "our-first-project-a3202.firebaseapp.com",
    projectId: "our-first-project-a3202",
    storageBucket: "our-first-project-a3202.appspot.com",
    messagingSenderId: "1066133635591",
    appId: "1:1066133635591:web:b6d4f2f0a2aa5fccace0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app)

export { db } ;