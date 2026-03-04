

import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-dbd70.firebaseapp.com",
  projectId: "interviewiq-dbd70",
  storageBucket: "interviewiq-dbd70.firebasestorage.app",
  messagingSenderId: "74224319301",
  appId: "1:74224319301:web:23945f45b2a4fc072e9c2c"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}