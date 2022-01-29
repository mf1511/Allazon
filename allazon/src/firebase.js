// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJQ_OOKeBFy8cuqgk4nkdqNZc93msXmMM",
  authDomain: "allazon-challenge.firebaseapp.com",
  projectId: "allazon-challenge",
  storageBucket: "allazon-challenge.appspot.com",
  messagingSenderId: "959025974592",
  appId: "1:959025974592:web:57a9aab0d8dce191267ea5",
  measurementId: "G-DV3R5XM068",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
