// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXyhwIY0lIPL8mtEAwtqnS6HGnCuWVKFc",
  authDomain: "email-password-auth-d628d.firebaseapp.com",
  projectId: "email-password-auth-d628d",
  storageBucket: "email-password-auth-d628d.appspot.com",
  messagingSenderId: "105267033829",
  appId: "1:105267033829:web:04ab65da4f329ead68460c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;