import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
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
      default:
        return <NotFound />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );

  // return (
  //   <Router>
  //     <div>
  //       <Navbar />
  //       <Routes>
  //         <Route path="/home" exact element={Home} />
  //         <Route path="/about" element={About} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
