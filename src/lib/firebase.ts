// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC87hTPmO7rE4U0ekz6cKeFroUkWKmcWQ8",
  authDomain: "my-messenger-applicaiton.firebaseapp.com",
  databaseURL:
    "https://my-messenger-applicaiton-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-messenger-applicaiton",
  storageBucket: "my-messenger-applicaiton.appspot.com",
  messagingSenderId: "218145851922",
  appId: "1:218145851922:web:63899507cc5fbad156a6cb",
  measurementId: "G-FDK6WN6DXQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
