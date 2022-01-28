// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBt1dyJ_8QxTh-7bjJL7eOZCaS11JnWpK0',
  authDomain: 'react-homepage-badf3.firebaseapp.com',
  projectId: 'react-homepage-badf3',
  storageBucket: 'react-homepage-badf3.appspot.com',
  messagingSenderId: '991116053252',
  appId: '1:991116053252:web:4bfc7ad81f020728c25e51',
  measurementId: 'G-KYEQJNFHQD',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
