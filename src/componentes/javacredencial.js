import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

  const firebaseConfig = {
   apiKey: "AIzaSyChm0Z3XxMNS9deiPA_JFZGeWztvgecq6o",
   authDomain: "marketing-react.firebaseapp.com",
   projectId: "marketing-react",
   storageBucket: "marketing-react.appspot.com",
   messagingSenderId: "354632958642",
   appId: "1:354632958642:web:b064e39dcc5a228d323fab"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;