// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOB2cVoOPcEAvyzkuSNldGM9jYM3W-wSc",
  authDomain: "inventory-management-d2e6d.firebaseapp.com",
  projectId: "inventory-management-d2e6d",
  storageBucket: "inventory-management-d2e6d.appspot.com",
  messagingSenderId: "118313090892",
  appId: "1:118313090892:web:6d1be7fc2d72d2d74159e9",
  measurementId: "G-KWJ17LXSKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}