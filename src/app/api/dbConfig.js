// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_DATA_BASE_KEY,
  authDomain: "marmitas-d6fc1.firebaseapp.com",
  projectId: "marmitas-d6fc1",
  storageBucket: "marmitas-d6fc1.appspot.com",
  messagingSenderId: "517419933851",
  appId: "1:517419933851:web:8a68ae8606b23806a8663e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app)