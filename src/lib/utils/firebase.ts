import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { userStore } from "sveltefire";

export const firebaseConfig = {
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
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
export const user = userStore(auth);
