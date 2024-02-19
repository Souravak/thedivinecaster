import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Trending from './components/Trending/Trending';
import TDCStores from './components/TDCStores/TDCStores';
import Donate from './components/Donate/Donate';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import PrivateData from './components/PrivateData/PrivateData';
// import Footer from './components/Footer/Footer';

import NotFound from './components/NotFound/NotFound';
import { useState } from 'react';
import './App.css';

function App() {
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
        // return <Login onLoginSuccess={handleLoginSuccess} />;
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
      {/* <Navbar /> */}
      {/* <TDCStores /> */}
      {/* <Trending /> */}
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      
    </div>
  );
}

export default App;
