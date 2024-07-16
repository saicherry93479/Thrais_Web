// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjzZOJaU5nRtl7-9EXgB3loNVhVg7Yu1A",
  authDomain: "thrias.firebaseapp.com",
  projectId: "thrias",
  storageBucket: "thrias.appspot.com",
  messagingSenderId: "412492594305",
  appId: "1:412492594305:web:5719221f0b21382c07a180",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
