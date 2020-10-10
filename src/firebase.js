import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7_CCuoU6wMqGxUtHR6I_g7Or2pzwGlKg",
  authDomain: "discord-clone-99c83.firebaseapp.com",
  databaseURL: "https://discord-clone-99c83.firebaseio.com",
  projectId: "discord-clone-99c83",
  storageBucket: "discord-clone-99c83.appspot.com",
  messagingSenderId: "549856855264",
  appId: "1:549856855264:web:fff1d1a4956d0f9a2d3c85",
  measurementId: "G-LFYVNT3YH7",
};

// get the firebase App and initiallize it with the firebase config.
const firebaseApp = firebase.initializeApp(firebaseConfig);
// get the firebase database from firebase firestore
const db = firebaseApp.firestore();

const auth = firebase.auth();

// google authentication provider.
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { auth, provider };
