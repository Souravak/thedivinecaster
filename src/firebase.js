import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import firebaseConfig from './FirebaseConfig/FirebaseConfig';

// Keep a single Firebase app instance across the entire frontend.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
