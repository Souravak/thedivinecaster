import React from 'react';
import PrivateDataComponent from './PrivateDataComponent';
import Timer from './Timer/Timer';
import './PrivateData.css';
import { useEffect } from 'react';




const PrivateData = () => {
    var time = 30;
    time = time*60;
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          // Refresh the page after 2 minutes
          window.location.reload();
        }, (time*1000)); // 2 minutes in milliseconds
    
        return () => {
          // Clear the timeout when the component is unmounted or updated
          clearTimeout(timeoutId);
        };
      }, []); // Empty dependency array ensures the effect runs only once after initial render
    
  return (
    // <div>PrivateData</div>
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