// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAg6e1D3bN4ijyP0omWO6hRgKAi49tUP8",
  authDomain: "tech-world-c48c2.firebaseapp.com",
  projectId: "tech-world-c48c2",
  storageBucket: "tech-world-c48c2.appspot.com",
  messagingSenderId: "699548611932",
  appId: "1:699548611932:web:326c95df6057bc745d7d99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
