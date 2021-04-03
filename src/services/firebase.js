import { analytics, auth, firestore, initializeApp } from 'firebase'

export const firebase = initializeApp({
  apiKey: "AIzaSyABdBUfwLvQgk0JkuqI7_smbfVQnukxlcM",
  authDomain: "stacks-5e258.firebaseapp.com",
  projectId: "stacks-5e258",
  storageBucket: "stacks-5e258.appspot.com",
  messagingSenderId: "674462185107",
  appId: "1:674462185107:web:8f86ad402eaae82232ff66",
  measurementId: "G-X5LLTM257W"
})

export const analytics = analytics()
export const auth = auth()
export const firestore = firestore()
