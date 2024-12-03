// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4sPxAg8_rsygjMBss2SWedN0_Hynf4Fo",
  authDomain: "coffee-store-464ed.firebaseapp.com",
  projectId: "coffee-store-464ed",
  storageBucket: "coffee-store-464ed.firebasestorage.app",
  messagingSenderId: "524575542483",
  appId: "1:524575542483:web:5a3879fbe720fc5514d826",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
