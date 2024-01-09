import React from 'react';
import './Donate.css';
import QRCodeComponent from './QRCodeComponent/QRCodeComponent';

const Donate = () => {
  return (
    <div className="donate-container">
      <h1 className="donate-title">Donate for a Cause</h1>
        <QRCodeComponent QRAmount="50" />
    </div>
  );
};

export default Donate