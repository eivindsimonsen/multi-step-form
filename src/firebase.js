// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH_8SxKzHf9ffIxnWPipRQufYtPcDQHyU",
  authDomain: "eas-multi-step-form.firebaseapp.com",
  projectId: "eas-multi-step-form",
  storageBucket: "eas-multi-step-form.appspot.com",
  messagingSenderId: "963223290974",
  appId: "1:963223290974:web:bcb29406708021727c20cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
