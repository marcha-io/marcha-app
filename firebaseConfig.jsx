// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0u4sEl45SCQisZKT0mjf0t6nyJlS_rZw",
  authDomain: "marcha-app-7ef76.firebaseapp.com",
  projectId: "marcha-app-7ef76",
  storageBucket: "marcha-app-7ef76.appspot.com",
  messagingSenderId: "303648714867",
  appId: "1:303648714867:web:bd83b44babb7ef6729fa06",
  measurementId: "G-EVQNFYFQLN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
