// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
  apiKey: "AIzaSyBlfDMPIffrNcmnhOCiqQHWlh7FcmUYt_g",
  authDomain: "todosapp-78b38.firebaseapp.com",
  projectId: "todosapp-78b38",
  storageBucket: "todosapp-78b38.firebasestorage.app",
  messagingSenderId: "562147405119",
  appId: "1:562147405119:web:7698f52bac995d2ae5b78a",
  measurementId: "G-HB8RMYT5P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();