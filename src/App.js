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
import AdminPanelLogin from './components/AdminPanelLogin/AdminPanelLogin';
import AdminPanel from './components/AdminPanel/AdminPanel';

import NotFound from './components/NotFound/NotFound';
import React, { useState, useEffect } from 'react';
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchControllerDataFromFirestore()
      .then(data => {
        sessionStorage.setItem('controllerData', JSON.stringify(data));
        if ((data && data.run === 'offline') || (data && data.run === '404')) {
          setIsUnderMaintenance(true);
        }
      })
      .catch(error => {
        console.error("Error fetching controller data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  
    
      fetchSocialMediaDataFromFirestore()
      .then(data => {
        sessionStorage.setItem('socialMediaData', JSON.stringify(data));
      })
      .catch(error => {
        console.error("Error fetching social media data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
      });
  }, []);
  
  const [currentPage, setCurrentPage] = useState('home');
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
      case 'about':
      case 'trending':
      case 'tdcstores':
      case 'donate':
      case 'login':
      case 'private-data':
      case 'contact':
      case 'admin-panel-login':
      case 'admin-panel':
        return loading ? (
          <div className="loading-animation">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        ) : (
          <RenderAfterLoading />
        );
      default:
        return <NotFound />;
    }
  };

  const RenderAfterLoading = () => {
    const [showPage, setShowPage] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowPage(true);
      }, 10); // 1 second delay

      return () => clearTimeout(timeout);
    }, []);

    return showPage ? getPageComponent() : null;
  };

  const getPageComponent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'trending':
        return <Trending />;
      case 'tdcstores':
        return <TDCStores />;
      case 'donate':
        return <Donate />;
      case 'login':
        return <Login onLoginSuccess={() => setCurrentPage('private-data')} />;
      case 'private-data':
        return <PrivateData />;
      case 'contact':
        return <Contact />;
      case 'admin-panel-login':
        return <AdminPanelLogin onAdminLoginSuccess={() => setCurrentPage('admin-panel')} />;
      case 'admin-panel':
        return <AdminPanel />;
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      {isUnderMaintenance ? (
        <MaintainancePage />
      ) : (
        <>
          <Navbar setCurrentPage={setCurrentPage} />
          {renderPage()}
        </>
      )}
    </div>
  );
}

export default App;