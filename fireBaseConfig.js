// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVOZvtpu69JejCO7sGAsva0-Gc8RpiMdY",
  authDomain: "agentity-ee07f.firebaseapp.com",
  projectId: "agentity-ee07f",
  storageBucket: "agentity-ee07f.firebasestorage.app",
  messagingSenderId: "925928725630",
  appId: "1:925928725630:web:0a76bd6b3d2890bea18c2f",
  measurementId: "G-9S0QLQPY7H"
};
// publish key:project-925928725630
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);