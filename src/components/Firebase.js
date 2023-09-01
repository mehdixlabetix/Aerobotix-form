import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const key = "AIzaSyDLJ6ePA94GuhdyKNuCpf-x-QuDWvWVnFo";
const firebaseConfig = {
  apiKey: key,
  authDomain: "aerobotix-53859.firebaseapp.com",
  projectId: "aerobotix-53859",
  storageBucket: "aerobotix-53859.appspot.com",
  messagingSenderId: "13309992121",
  appId: "1:13309992121:web:4b6aab3e9814eb2db7cf68",
  measurementId: "G-4NLC0Q5LC5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
