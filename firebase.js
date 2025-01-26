// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvWmcYA3TEc2GfW9IWzHvkQkFoirXsvS8",
  authDomain: "my-website-v2-f484a.firebaseapp.com",
  projectId: "my-website-v2-f484a",
  storageBucket: "my-website-v2-f484a.firebasestorage.app",
  messagingSenderId: "1006934056937",
  appId: "1:1006934056937:web:601990896ee2ac20007578",
  measurementId: "G-KYX8JP4396"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);