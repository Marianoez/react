import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Yy6s_xUQkIjq4CPx3tXogBr43G5LwiE",
  authDomain: "mstalabarteria.firebaseapp.com",
  projectId: "mstalabarteria",
  storageBucket: "mstalabarteria.appspot.com",
  messagingSenderId: "833205723439",
  appId: "1:833205723439:web:9bb4909e70d8dec99141da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
