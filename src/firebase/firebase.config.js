// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuHAn8FGm2aL8m7qMXYHloBMIbjGOm2eY",
  authDomain: "task-management-3ac66.firebaseapp.com",
  projectId: "task-management-3ac66",
  storageBucket: "task-management-3ac66.appspot.com",
  messagingSenderId: "151883746722",
  appId: "1:151883746722:web:85bab03361088c079f76fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;