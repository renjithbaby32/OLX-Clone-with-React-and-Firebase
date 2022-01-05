import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyA97-Ljg_qX5CplkX2J9_G4aRngUR3GD3c",
  authDomain: "olx-clone-f490b.firebaseapp.com",
  projectId: "olx-clone-f490b",
  storageBucket: "olx-clone-f490b.appspot.com",
  messagingSenderId: "591931765180",
  appId: "1:591931765180:web:f3abaa6c31e0ff4f397bb9"
};

export default firebase.initializeApp(firebaseConfig);