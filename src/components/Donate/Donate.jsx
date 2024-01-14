import React, {useState} from 'react';
import './Donate.css';
import QRCodeComponent from './QRCodeComponent/QRCodeComponent';
import Footer from '../Footer/Footer';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("500");

  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };
  return (
    <div className="donate-container">
      <h1 className="donate-title">Donate for a Cause</h1>
        <div className="donate-selector">
          <QRCodeComponent QRAmount={selectedAmount} />
        </div>
        <div className="donate-amount-button">
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("10")}>10</button>
          <button onClick={() => handleButtonClick("50")}>50</button>
          <button onClick={() => handleButtonClick("100")}>100</button>
          <button onClick={() => handleButtonClick("500")}>500</button>
          <button onClick={() => handleButtonClick("2000")}>2000</button>
          <button onClick={() => handleButtonClick("5000")}>5000</button>
          <button onClick={() => handleButtonClick("10000")}>10000</button>
          <button onClick={() => handleButtonClick("25000")}>25000</button>
          <button onClick={() => handleButtonClick("Other")}>Other</button>
        </div>
        <Footer />
    </div>
  );
};

export default Donate