import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAk-BhELGujXAIHRHCetw_oniQ8XDDxh5M",
  authDomain: "whatsapp-clone-6108b.firebaseapp.com",
  projectId: "whatsapp-clone-6108b",
  storageBucket: "whatsapp-clone-6108b.appspot.com",
  messagingSenderId: "467039038004",
  appId: "1:467039038004:web:4f029f153ee0bb2825b861",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
