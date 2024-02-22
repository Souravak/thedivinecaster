import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Trending from './components/Trending/Trending';
import TDCStores from './components/TDCStores/TDCStores';
import Donate from './components/Donate/Donate';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateData from './components/PrivateData/PrivateData';
import MaintainancePage from './components/MaintainancePage/MaintainancePage';
// import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCvafXWcjByZCRfX9G4hfU1RZ0vU84sKFM",
    authDomain: "thedivinecaster-877cc.firebaseapp.com",
    projectId: "thedivinecaster-877cc",
    storageBucket: "thedivinecaster-877cc.appspot.com",
    messagingSenderId: "293556884205",
    appId: "1:293556884205:web:927adc85f21909063572e4",
    measurementId: "G-194H2WERR6"
};

firebase.initializeApp(firebaseConfig);

const fetchControllerDataFromFirestore = async () => {
  const db = firebase.firestore();
  const controllerRef = db.collection('controller').doc('status');
  const doc = await controllerRef.get();
  if (doc.exists) {
      return doc.data();
  } else {
      console.log("No such document!");
      return null;
  }
};

const fetchSocialMediaDataFromFirestore = async () => {
  const db = firebase.firestore();
  const dataRef = db.collection('data');
  const snapshot = await dataRef.get();
  const data = {};

  snapshot.forEach(doc => {
      data[doc.id] = doc.data();
  });

  return data;
};

function App() {
  
  const [isUnderMaintenance, setIsUnderMaintenance] = useState(false);
  const [code, setCode] = useState('');
  useEffect(() => {
    fetchControllerDataFromFirestore().then(data => {
      sessionStorage.setItem('controllerData', JSON.stringify(data));
      if ((data && data.run === 'offline') || (data && data.run === '404') ) {
        setIsUnderMaintenance(true);
        setCode(data.run)
      }
      }).catch(error => {
        console.error("Error fetching controller data:", error);
      });

    fetchSocialMediaDataFromFirestore().then(data => {
      sessionStorage.setItem('socialMediaData', JSON.stringify(data));
    }).catch(error => {
      console.error("Error fetching social media data:", error);
    });
  }, []);

  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'trending':
        return <Trending />
      case 'tdcstores':
        return <TDCStores />
      case 'donate':
        return <Donate />;
      case 'login':
        return <Login onLoginSuccess={() => setCurrentPage('private-data')} />;
      case 'private-data':
        return <PrivateData />;
      case 'contact':
        return <Contact />;
        
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      {isUnderMaintenance ? (
        <MaintainancePage code={code}/>
      ) : <><Navbar setCurrentPage={setCurrentPage} /> {renderPage()}</>}
    </div>
  );
}

export default App;
