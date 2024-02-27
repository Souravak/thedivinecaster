import React from 'react';
import PrivateDataComponent from './PrivateDataComponent';
import Timer from './Timer/Timer';
import './PrivateData.css';




const PrivateData = () => {
  const controllerData = JSON.parse(sessionStorage.getItem('controllerData'))
    var time = +controllerData.duration; // in minutes
    time = time*60; // convert to milliseconds

  return (
    <section id="private-data">
        <div className="private-data-title-countdown">
            <h1 className="private-data-title">Private Data</h1>
            <h1 className="private-data-timer"><Timer initialTimer={time} /></h1>
        </div>
        <div className="private-data-content">
            <PrivateDataComponent />
        </div>
    </section>
  )
}

export default PrivateData