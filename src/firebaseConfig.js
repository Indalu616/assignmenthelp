// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FIREBASE_KEY } from "./WebForm";
const firebaseConfig = {
  apiKey: FIREBASE_KEY.apiKey,
  authDomain: FIREBASE_KEY.authDomain,
  projectId: FIREBASE_KEY.projectId,
  storageBucket: FIREBASE_KEY.storageBucket,
  messagingSenderId: FIREBASE_KEY.messagingSenderId,
  appId: FIREBASE_KEY.appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
