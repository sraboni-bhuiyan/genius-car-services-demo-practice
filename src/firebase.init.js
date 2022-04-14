// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC34ya-hiC4E37lBQES5KXHfprDPRgZPCQ",
  authDomain: "genius-car-services-696c0.firebaseapp.com",
  projectId: "genius-car-services-696c0",
  storageBucket: "genius-car-services-696c0.appspot.com",
  messagingSenderId: "551064831502",
  appId: "1:551064831502:web:e1151bcadeb43ddb411e5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;