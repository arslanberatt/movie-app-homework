import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCqyxsw1e63AkLQhvK0VaYly3K4QPQ3IF8',
  authDomain: 'rn-firebase-23191.firebaseapp.com',
  projectId: 'rn-firebase-23191',
  storageBucket: 'rn-firebase-23191.firebasestorage.app',
  messagingSenderId: '790956810259',
  appId: '1:790956810259:web:3b446f4b9b7fd0d2c81fe6',
  measurementId: 'G-DMLN4BD1WK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
