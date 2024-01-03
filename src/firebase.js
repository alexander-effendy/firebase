import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqnwtaKng5-bGWc_BMURRoq1pBU7DkBQA",
  authDomain: "samplefirebase-d9769.firebaseapp.com",
  projectId: "samplefirebase-d9769",
  storageBucket: "samplefirebase-d9769.appspot.com",
  messagingSenderId: "984736461614",
  appId: "1:984736461614:web:88489ab0bf41d214b700bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);