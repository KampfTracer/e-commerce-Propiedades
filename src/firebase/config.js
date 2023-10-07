// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHu9zFJ2a6k43Fv05FDFpLNWOyIbYHDW4",
  authDomain: "realtyshop-bea55.firebaseapp.com",
  projectId: "realtyshop-bea55",
  storageBucket: "realtyshop-bea55.appspot.com",
  messagingSenderId: "369593750397",
  appId: "1:369593750397:web:f571282aef397e3a62f214"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);