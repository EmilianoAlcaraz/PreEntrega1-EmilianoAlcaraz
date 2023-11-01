import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlZGO53_KCfUlCjPHsyC5QTHBRMKwZrQA",
  authDomain: "coderhouse-ecommerce-b7166.firebaseapp.com",
  projectId: "coderhouse-ecommerce-b7166",
  storageBucket: "coderhouse-ecommerce-b7166.appspot.com",
  messagingSenderId: "386447770497",
  appId: "1:386447770497:web:fb15e1e172d5c94d7fde80",
  measurementId: "G-B89MPCDFRT"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
