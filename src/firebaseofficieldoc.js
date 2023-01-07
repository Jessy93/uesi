// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2LaFgVH0oj3sEni7d77I0pTwEeh9Rofs",
  authDomain: "crm-budget-9d90e.firebaseapp.com",
  databaseURL: "https://crm-budget-9d90e-default-rtdb.firebaseio.com",
  projectId: "crm-budget-9d90e",
  storageBucket: "crm-budget-9d90e.appspot.com",
  messagingSenderId: "445182632123",
  appId: "1:445182632123:web:1f9623d44c1c17b7aa099e",
  measurementId: "G-78J7K2YV5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);