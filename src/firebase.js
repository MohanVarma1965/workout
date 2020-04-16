import firebase from 'firebase/app'

/*
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
*/


let firebaseConfig = {
  apiKey: "AIzaSyC3QwCWjkEsOdqkclx8Kc-u7tzD6IR_9V8",
  authDomain: "workout-wfh.firebaseapp.com",
  databaseURL: "https://workout-wfh.firebaseio.com",
  projectId: "workout-wfh",
  storageBucket: "workout-wfh.appspot.com",
  messagingSenderId: "959995059044",
  appId: "1:959995059044:web:e3921f2372ff0e77e27871",
  measurementId: "G-VWY5ZHP3R8"
};

export const app = firebase.initializeApp(firebaseConfig)

export const auth = app.auth()

export const logout = () => auth.signOut()

export const roles = {
  ADMIN: 'ADMIN'
}
