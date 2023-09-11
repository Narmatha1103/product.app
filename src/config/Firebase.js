// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8DVKyccg8GZnAiVW1UdY2JiHWz0V3NHE",
  authDomain: "my-app-2a128.firebaseapp.com",
  projectId: "my-app-2a128",
  storageBucket: "my-app-2a128.appspot.com",
  messagingSenderId: "944452842624",
  appId: "1:944452842624:web:85d53962caf9e522d7e265",
  measurementId: "G-QD3KZDFGPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const auth = getAuth();
