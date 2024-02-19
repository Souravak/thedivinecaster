import React, { useState, useEffect } from 'react';
import './Timer.css';

function Timer(props) {
  const [timer, setTimer] = useState(props.initialTimer);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(interval); // Stop the timer when it reaches 0
          // You can add additional logic here when timer reaches 0
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000); // Update timer every second

    return () => clearInterval(interval); // Cleanup function to clear the interval
  }, [props.initialTimer]); // Re-run effect when initialTimer prop changes

  return (
    <>
      <span className="timer">{timer}</span>
    </>
  );
}

export default Timer;
