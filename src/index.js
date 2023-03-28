import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvihS2nY0c22OAporchdxPDQMcEyaPuWo",
  authDomain: "coderreact-73968.firebaseapp.com",
  projectId: "coderreact-73968",
  storageBucket: "coderreact-73968.appspot.com",
  messagingSenderId: "893784802291",
  appId: "1:893784802291:web:adf74dc7f03a1f76e28886"
};

// Initialize Firebase

initializeApp(firebaseConfig);






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);