import { initializeApp } from "firebase/app";
import { getFirestore, addDoc,  collection, getDocs } from "firebase/firestore";

import firebase from 'firebas/app'
import 'firebase/auth'

// firebase deploy parancsot még ki kell adni

const firebaseConfig = {
    apiKey: "AIzaSyBJkD8Prww40QbFjpDCT21j9Hx3YVvsHho",
    authDomain: "authentication-d1dd7.firebaseapp.com",
    projectId: "authentication-d1dd7",
    storageBucket: "authentication-d1dd7.appspot.com",
    messagingSenderId: "228052451891",
    appId: "1:228052451891:web:09ad3971e7cc9355419946"
  };
  
  const app = initializeApp(firebaseConfig);
