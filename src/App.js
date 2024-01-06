import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Trending from './components/Trending/Trending';
import TDCStores from './components/TDCStores/TDCStores';
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
