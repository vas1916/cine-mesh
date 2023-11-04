// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX58ggESIeWA9fENaBxthqU-8b4onQrZ4",
  authDomain: "cinemesh-d8aab.firebaseapp.com",
  projectId: "cinemesh-d8aab",
  storageBucket: "cinemesh-d8aab.appspot.com",
  messagingSenderId: "1051446894582",
  appId: "1:1051446894582:web:c93243c7db0244ced8f1d7",
  measurementId: "G-364RDW5YSY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("@analytics-", analytics);
export const auth = getAuth();
