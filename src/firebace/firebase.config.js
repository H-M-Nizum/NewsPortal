// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOkYnVEjy5ujrIYH41sCB5Ym4qIn6hGnQ",
  authDomain: "reactauth-fb818.firebaseapp.com",
  projectId: "reactauth-fb818",
  storageBucket: "reactauth-fb818.firebasestorage.app",
  messagingSenderId: "1016395280355",
  appId: "1:1016395280355:web:488dba1832de8a43b47ad6",
  measurementId: "G-E6BCVP9G0N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
