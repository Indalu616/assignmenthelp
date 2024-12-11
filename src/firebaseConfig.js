// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBeNmRWwO-AkBNWgKoPks3tXqYSnYQzmUY",
  authDomain: "assignmenthelp-a980c.firebaseapp.com",
  projectId: "assignmenthelp-a980c",
  storageBucket: "assignmenthelp-a980c.firebasestorage.app",
  messagingSenderId: "666912366367",
  appId: "1:666912366367:web:94a36943d5890b3e18da2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
