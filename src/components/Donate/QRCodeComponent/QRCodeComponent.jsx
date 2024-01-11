import React from 'react';
import './QRCodeComponent.css';

const QRCodeComponent = ({ QRAmount }) => {
  const imagePath = `./QRCodes/qr${QRAmount}.jpg`;

  return (
    <>
      <div className="qr-section">
        <div className="qr-image-container">
          <img src={require(`${imagePath}`)} alt={QRAmount} className="qr-center-square"/>
        </div>
        <p className="qr-amount">Amount: {QRAmount} Rs</p>
      </div>
    </>
  );
};

export default QRCodeComponent;
