// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3XJyB4uz14XLoP1S6AI_q1p6ZCm-fXxE",
  authDomain: "react-disney-plus-82ef3.firebaseapp.com",
  projectId: "react-disney-plus-82ef3",
  storageBucket: "react-disney-plus-82ef3.appspot.com",
  messagingSenderId: "1004935874623",
  appId: "1:1004935874623:web:3a841b41796f55297ed08a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;