// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA1XuqkOBxE9KQ2aE9Znrpt-juqMPi3vxY",
  authDomain: "e-com-16b85.firebaseapp.com",
  projectId: "e-com-16b85",
  storageBucket: "e-com-16b85.appspot.com",
  messagingSenderId: "277679463151",
  appId: "1:277679463151:web:187a9b7647b788c3f6d91a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }