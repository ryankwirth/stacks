import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

export const app = Firebase.initializeApp({
  apiKey: "AIzaSyABdBUfwLvQgk0JkuqI7_smbfVQnukxlcM",
  authDomain: "stacks-5e258.firebaseapp.com",
  projectId: "stacks-5e258",
  storageBucket: "stacks-5e258.appspot.com",
  messagingSenderId: "674462185107",
  appId: "1:674462185107:web:8f86ad402eaae82232ff66",
  measurementId: "G-X5LLTM257W",
});

export const auth = Firebase.auth();
export const analytics = Firebase.analytics();
export const firestore = Firebase.firestore();
