// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChfhPuniyWVL6vrDYysITYunKZ5I_IJWw",
  authDomain: "cityhospital-2813b.firebaseapp.com",
  projectId: "cityhospital-2813b",
  storageBucket: "cityhospital-2813b.appspot.com",
  messagingSenderId: "21320953973",
  appId: "1:21320953973:web:a87ffc35a959176466083c",
  measurementId: "G-X21ZXBC9Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

