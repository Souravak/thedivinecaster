import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer(props) {
  const [timer, setTimer] = useState(props.initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          window.location.reload();
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // Update

    return () => clearInterval(interval); 
  }, [props.initialTimer]);

  return (
    <div className="timer-container">
      <span className="timer">{timer.toString().padStart(2, '0')}</span> 
      <span className="seconds-left">seconds left</span>
    </div>
  );
}

export default Timer;
