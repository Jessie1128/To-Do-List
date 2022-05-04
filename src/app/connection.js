import { initializeApp } from 'firebase/app'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBB-MXIbYPJCDlX-gax9BTCuqaVDEmmizU",
  authDomain: "to-do-list-c7652.firebaseapp.com",
  projectId: "to-do-list-c7652",
  storageBucket: "to-do-list-c7652.appspot.com",
  messagingSenderId: "911108450735",
  appId: "1:911108450735:web:078ad94931e38e7a33675a"
};
const connect = initializeApp(firebaseConfig);
const db = getFirestore(connect);

export { firebaseConfig , connect , db }