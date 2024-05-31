// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your-API-Key",
  authDomain: "Your-Auth-Domain",
  projectId: "Your-Project-ID",
  storageBucket: "Your-Storage-Bucket",
  messagingSenderId: "Your-Messaging-Sender-ID",
  appId: "Your-App-ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);