import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCvafXWcjByZCRfX9G4hfU1RZ0vU84sKFM",
    authDomain: "thedivinecaster-877cc.firebaseapp.com",
    projectId: "thedivinecaster-877cc",
    storageBucket: "thedivinecaster-877cc.appspot.com",
    messagingSenderId: "293556884205",
    appId: "1:293556884205:web:927adc85f21909063572e4",
    measurementId: "G-194H2WERR6"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, app }; 