// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOAgz4OPBMBmLsVx-dG6IdY9zXZg3AJps",
  authDomain: "websitebycat.firebaseapp.com",
  databaseURL: "https://websitebycat-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "websitebycat",
  storageBucket: "websitebycat.appspot.com",
  messagingSenderId: "477909978296",
  appId: "1:477909978296:web:2859e65eab523a5bbb384d",
  measurementId: "G-XPSRF99TQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);