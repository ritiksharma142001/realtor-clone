// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhxtL1n7Psbraa5tj8Hknzf98yqJUq0cc", 
  authDomain: "realtor-clone-28310.firebaseapp.com",
  projectId: "realtor-clone-28310",
  storageBucket: "realtor-clone-28310.appspot.com",
  messagingSenderId: "815028912176",
  appId: "1:815028912176:web:4afc37620c2df458ff6df5",
  measurementId: "G-F5CK5QDWY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();