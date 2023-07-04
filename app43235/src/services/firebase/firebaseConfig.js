import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBergng0eHiaRzHsLS-_MlTiL5WoVhoPVw",
  authDomain: "react-trabajo-final-fb.firebaseapp.com",
  projectId: "react-trabajo-final-fb",
  storageBucket: "react-trabajo-final-fb.appspot.com",
  messagingSenderId: "3525362007",
  appId: "1:3525362007:web:1b7fe41f5391ff7e7b7e12"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)