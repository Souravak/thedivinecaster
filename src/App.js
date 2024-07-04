import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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
import firebaseConfig from './FirebaseConfig/FirebaseConfig';
import './App.css';

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

// const fetchVideoLinkFromFirestore = async () => {
//   try {
//     const db = firebase.firestore();
//     const videoTDCLinkRef = db.collection('videolink').doc('tdclink');
//     const videoDGLinkRef = db.collection('videolink').doc('dglink');
//     const videoCountRef = db.collection('videolink').doc('count');

//     const [tdcdoc, dgdoc, countDoc] = await Promise.all([
//       videoTDCLinkRef.get(),
//       videoDGLinkRef.get(),
//       videoCountRef.get()
//     ]);

//     const countData = countDoc.data();
//     console.log(countData.count);
//     sessionStorage.setItem('videoCount', countData.count);

//     const tdclinks = [];
//     const dglinks = [];

//     if (tdcdoc.exists) {
//       const tdclinksData = tdcdoc.data();
//       Object.keys(tdclinksData)
//         .filter(key => !isNaN(parseInt(key)))
//         .sort((a, b) => parseInt(b) - parseInt(a))
//         .forEach(key => tdclinks.push(tdclinksData[key]));
//     } else {
//       console.log("No tdclink document!");
//     }

//     if (dgdoc.exists) {
//       const dglinksData = dgdoc.data();
//       Object.keys(dglinksData)
//         .filter(key => !isNaN(parseInt(key)))
//         .sort((a, b) => parseInt(b) - parseInt(a))
//         .forEach(key => dglinks.push(dglinksData[key]));
//     } else {
//       console.log("No dglink document!");
//     }

//     return { tdclinks, dglinks };
//   } catch (error) {
//     console.error("Error fetching video links:", error);
//     return { tdclinks: [], dglinks: [] };
//   }
// };

const fetchVideoLinkFromFirestore = async () => {
  try {
    const db = firebase.firestore();

    const videoTDCLinkRef = db.collection('videolink').doc('tdclink');
    const videoDGLinkRef = db.collection('videolink').doc('dglink');
    const videoSRVTVLinkRef = db.collection('videolink').doc('srvtvlink');
    const videoDMHLinkRef = db.collection('videolink').doc('dmhlink');
    const videoDPCSLinkRef = db.collection('videolink').doc('dpcslink');
    const videoDCHLinkRef = db.collection('videolink').doc('dchlink');

    const videoCountRef = db.collection('videolink').doc('count');

    const [tdcdoc, dgdoc, srvtvdoc, dmhdoc, dpcsdoc, dchdoc, countDoc] = await Promise.all([
      videoTDCLinkRef.get(),
      videoDGLinkRef.get(),
      videoSRVTVLinkRef.get(),
      videoDMHLinkRef.get(),
      videoDPCSLinkRef.get(),
      videoDCHLinkRef.get(),
      videoCountRef.get()
    ]);

    const countData = countDoc.data();
    console.log(countData.count);
    sessionStorage.setItem('videoCount', countData.count);

    const tdclinks = [];
    const dglinks = [];
    const srvtvlinks = [];
    const dmhlinks = [];
    const dpcslinks = [];
    const dchlinks = [];

    if (tdcdoc.exists) {
      const tdclinksData = tdcdoc.data();
      Object.keys(tdclinksData)
        .filter(key => !isNaN(parseInt(key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => tdclinks.push(tdclinksData[key]));
    } else {
      console.log("No tdclink document!");
    }

    if (dgdoc.exists) {
      const dglinksData = dgdoc.data();
      Object.keys(dglinksData)
        .filter(key => !isNaN(parseInt(key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => dglinks.push(dglinksData[key]));
    } else {
      console.log("No dglink document!");
    }

    if (srvtvdoc.exists) {
      const srvtvlinksData = srvtvdoc.data();
      Object.keys(srvtvlinksData)
        .filter(key => !isNaN(parseInt(key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => srvtvlinks.push(srvtvlinksData[key]));
    } else {
      console.log("No srvtvlink document!");
    }

    if (dmhdoc.exists) {
      const dmhlinksData = dmhdoc.data();
      Object.keys(dmhlinksData)
        .filter(key => !isNaN(parseInt(key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => dmhlinks.push(dmhlinksData[key]));
    } else {
      console.log("No dmhlink document!");
    }

    if (dpcsdoc.exists) {
      const dpcslinksData = dpcsdoc.data();
      Object.keys(dpcslinksData)
        .filter(key => !isNaN(parseInt(key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => dpcslinks.push(dpcslinksData[key]));
    } else {
      console.log("No dpclink document!");
    }

    if (dchdoc.exists) {
      const dchlinksData = dchdoc.data();
      Object.keys(dchlinksData)
        .filter(key => !isNaN(parseInt( key)))
        .sort((a, b) => parseInt(b) - parseInt(a))
        .forEach(key => dchlinks.push(dchlinksData[key]));
    } else {
      console.log("No dchlink document!");
    }
    



    return [tdclinks, dglinks, srvtvlinks, dmhlinks, dpcslinks, dchlinks]; // Return an array of tdclinks and dglinks
  } catch (error) {
    console.error("Error fetching video links:", error);
    return [[], [], []]; // Return empty arrays in case of error
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

const fetchTrendingControllerDataFromFirestore = async () => {
  const db = firebase.firestore();
  const controllerRef = db.collection('controller').doc('trending_controller');
  const doc = await controllerRef.get();
  if (doc.exists) {
    return doc.data();
  } else {
    console.log("No such document!");
    return null;
  }
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
  
    
    // fetchVideoLinkFromFirestore()
    //   .then(tdclinks => {
    //     sessionStorage.setItem('TDCVideoLinks', JSON.stringify(tdclinks));
    //   })
    //   .catch(error => {
    //     console.error("Error fetching video links:", error);
    //   })
    //   .finally(() => {
    //     setLoading(false); // Set loading to false regardless of success or failure
    // });

    fetchTrendingControllerDataFromFirestore()
      .then(data => {
        sessionStorage.setItem('trendingControllerData', JSON.stringify(data));
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching trending controller data:", error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false regardless of success or failure
    });
    
    
    fetchVideoLinkFromFirestore()
      .then(([tdclinks, dglinks, srvtvlinks, dmhlinks, dpcslinks, dchlinks]) => {

        sessionStorage.setItem('TDCVideoLinks', JSON.stringify(tdclinks));
        sessionStorage.setItem('DGVideoLinks', JSON.stringify(dglinks));
        sessionStorage.setItem('SRVTVVideoLinks', JSON.stringify(srvtvlinks));
        sessionStorage.setItem('DMHVideoLinks', JSON.stringify(dmhlinks));
        sessionStorage.setItem('DPCSVideoLinks', JSON.stringify(dpcslinks));
        sessionStorage.setItem('DCHVideoLinks', JSON.stringify(dchlinks));

        setLoading(false); // Set loading to false after all fetch calls are complete
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of errors
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
            <p>Rendering....</p>
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