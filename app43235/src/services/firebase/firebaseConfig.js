import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDOH-YYtMNkKi-ZfhHPLDx5EjhoA5RI9dg",
  authDomain: "react-proyect-fede.firebaseapp.com",
  projectId: "react-proyect-fede",
  storageBucket: "react-proyect-fede.appspot.com",
  messagingSenderId: "620323574378",
  appId: "1:620323574378:web:a49a9d6bbf30b33cbbf013"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)