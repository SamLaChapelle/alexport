// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDbbU5lDohRM7emA2p1Zx25STg_xd5HNeM",

  authDomain: "alexs-portfolio-e2beb.firebaseapp.com",

  projectId: "alexs-portfolio-e2beb",

  storageBucket: "alexs-portfolio-e2beb.appspot.com",

  messagingSenderId: "600906094962",

  appId: "1:600906094962:web:fbeed31b3d3488c8e725eb",

  measurementId: "G-3ZN7LSJ2GD",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
