// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx5ZQh3bRyLjkkAD1XQAbXtYsF0DnTFWM",
  authDomain: "corporate-events-managem-39a3d.firebaseapp.com",
  projectId: "corporate-events-managem-39a3d",
  storageBucket: "corporate-events-managem-39a3d.appspot.com",
  messagingSenderId: "813024865938",
  appId: "1:813024865938:web:b3f8ceaa2d0c1b6c4fc04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;