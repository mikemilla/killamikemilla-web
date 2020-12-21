import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import firebase from "firebase/app"
import "firebase/firestore"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyAfDRhheyN7TvFkRT9nWbWOkZPAmWWEdRM",
  authDomain: "killamikemilla-fec64.firebaseapp.com",
  projectId: "killamikemilla-fec64",
  storageBucket: "killamikemilla-fec64.appspot.com",
  messagingSenderId: "35212873360",
  appId: "1:35212873360:web:25ded36df366efd79c1215",
  measurementId: "G-90QDEDN232"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
