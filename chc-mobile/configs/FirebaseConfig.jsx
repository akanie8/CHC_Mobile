// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeO-XMdWS8FERzo8YD2pd4DmYl1LChdEQ",
  authDomain: "chc-mobile-9fb7a.firebaseapp.com",
  projectId: "chc-mobile-9fb7a",
  storageBucket: "chc-mobile-9fb7a.appspot.com",
  messagingSenderId: "84575738790",
  appId: "1:84575738790:web:e5ec5f1b0c80ae3af74d67",
  measurementId: "G-WNCEJRNQ6F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
