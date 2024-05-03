// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJF9r_k3Htlcvp_N9Z7nkeFAP5kMEr618",
  authDomain: "login-40da7.firebaseapp.com",
  projectId: "login-40da7",
  storageBucket: "login-40da7.appspot.com",
  messagingSenderId: "564099287354",
  appId: "1:564099287354:web:53c23d2e60b41340512803"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth }