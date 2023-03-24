import React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFMDAcPV575c-35HknG6Dk1YAyspvgkR4",
  authDomain: "enanocommerce.firebaseapp.com",
  projectId: "enanocommerce",
  storageBucket: "enanocommerce.appspot.com",
  messagingSenderId: "696807831399",
  appId: "1:696807831399:web:70452afa92d8ef1c57e1c2",
  measurementId: "G-G6EGW101HE"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
)



