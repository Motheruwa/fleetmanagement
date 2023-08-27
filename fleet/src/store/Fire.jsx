// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";

import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZPV_f_Kkl2OB4F1wv-NXie17cvUCu0Dc",
  authDomain: "adminlogin-e1e50.firebaseapp.com",
  projectId: "adminlogin-e1e50",
  storageBucket: "adminlogin-e1e50.appspot.com",
  messagingSenderId: "172203467315",
  appId: "1:172203467315:web:623d28e83bdbe82870f946"
};
const firebaseConfig1 = {
  apiKey: "AIzaSyB09Koi3ay5Lp3AEZ-iTQh5EUzX6-5oc_A",
  authDomain: "driverlogin-37969.firebaseapp.com",
  projectId: "driverlogin-37969",
  storageBucket: "driverlogin-37969.appspot.com",
  messagingSenderId: "542243016671",
  appId: "1:542243016671:web:223cbaf2ce53f9bed8be6a"
};
const firebaseConfig2 = {
  apiKey: "AIzaSyDf7mPVZ9un_0aXC0dLGsYGqC8i8j6KCO0",
  authDomain: "maintainancelogin.firebaseapp.com",
  projectId: "maintainancelogin",
  storageBucket: "maintainancelogin.appspot.com",
  messagingSenderId: "42712734669",
  appId: "1:42712734669:web:ebbeac147b8a4c69228284"
};


// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig,"first");
const app1=firebase.initializeApp(firebaseConfig1,"second");
const app2=firebase.initializeApp(firebaseConfig2,"third");
export const Admin=app.auth()
export const Driver=app1.auth()
export const Maintainance=app2.auth()