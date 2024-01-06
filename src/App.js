import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About/>
    </div>
  );
}

export default App;
