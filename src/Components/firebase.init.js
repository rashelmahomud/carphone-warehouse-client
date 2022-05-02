// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEKEUOzWTioER6Ru4srEUjNvynDK9_jEg",
  authDomain: "carphone-warehouse-d843f.firebaseapp.com",
  projectId: "carphone-warehouse-d843f",
  storageBucket: "carphone-warehouse-d843f.appspot.com",
  messagingSenderId: "501798504810",
  appId: "1:501798504810:web:e8d6d054fcde1ff9f4fd13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

export default auth;