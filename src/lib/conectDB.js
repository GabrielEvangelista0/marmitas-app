// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_9hZkbQrvr9IYA9aZLDmbpgaSRIl5ls",
  authDomain: "marmitas-d6fc1.firebaseapp.com",
  databaseURL: "https://marmitas-d6fc1-default-rtdb.firebaseio.com",
  projectId: "marmitas-d6fc1",
  storageBucket: "marmitas-d6fc1.appspot.com",
  messagingSenderId: "517419933851",
  appId: "1:517419933851:web:8a68ae8606b23806a8663e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

