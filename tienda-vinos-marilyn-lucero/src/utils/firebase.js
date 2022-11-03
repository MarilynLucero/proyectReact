// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAxpVVCoNU3mFUmG0ETk3LWaikiOB0ulrE",

  authDomain: "winery-ml-fc10a.firebaseapp.com",

  projectId: "winery-ml-fc10a",

  storageBucket: "winery-ml-fc10a.appspot.com",

  messagingSenderId: "487141724288",

  appId: "1:487141724288:web:be86b32f7ee8b527b4d665"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//crear la instancia de la base de datos
export const db = getFirestore(app);