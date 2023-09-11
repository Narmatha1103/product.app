// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSu5DXvqobm5_Lp3pQS6rkQKJyvLMk-Fc",
  authDomain: "product-app-f1636.firebaseapp.com",
  projectId: "product-app-f1636",
  storageBucket: "product-app-f1636.appspot.com",
  messagingSenderId: "473591784123",
  appId: "1:473591784123:web:3c3b0b1206fb671dc9ff9e",
  measurementId: "G-3G8CBBQE2D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase();
export const auth = getAuth();
