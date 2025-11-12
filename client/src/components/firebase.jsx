// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAe28kHMjUVFeJHXD1aXxVqTDs5d_0JM68",
  authDomain: "syncspace-1a7c9.firebaseapp.com",
  projectId: "syncspace-1a7c9",
  storageBucket: "syncspace-1a7c9.firebasestorage.app",
  messagingSenderId: "497576840826",
  appId: "1:497576840826:web:ac5e27e8dca72b767a75c3",
  measurementId: "G-G8QP61EKPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export default app