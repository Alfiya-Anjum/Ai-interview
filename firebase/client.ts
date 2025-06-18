// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnmd87Fd0q1ijSG6d1ThqA7FXck0yWYdw",
  authDomain: "ai-interview-9e92b.firebaseapp.com",
  projectId: "ai-interview-9e92b",
  storageBucket: "ai-interview-9e92b.firebasestorage.app",
  messagingSenderId: "352536317239",
  appId: "1:352536317239:web:ef7cd1d5fb6bbcc6ed5eb2",
  measurementId: "G-KRV3MD3QW8"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);