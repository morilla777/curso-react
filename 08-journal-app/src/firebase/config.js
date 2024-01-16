

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVy6Q-8RVknvmWXS9q5lGiMkm0wurr_Vg",
  authDomain: "react-cursos-335f5.firebaseapp.com",
  projectId: "react-cursos-335f5",
  storageBucket: "react-cursos-335f5.appspot.com",
  messagingSenderId: "250593249226",
  appId: "1:250593249226:web:dca21a4d2dc874e6657133"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );