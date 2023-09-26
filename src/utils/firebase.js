// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4c624.firebaseapp.com",
  projectId: "blog-4c624",
  storageBucket: "blog-4c624.appspot.com",
  messagingSenderId: "776514650451",
  appId: "1:776514650451:web:9029c13fbecd5c985661a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);