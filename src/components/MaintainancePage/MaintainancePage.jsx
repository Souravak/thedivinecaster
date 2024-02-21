import React from 'react';
import { useSpring, animated } from 'react-spring';

const MaintainancePage = () => {
  // Define animation styles using react-spring
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeIn}>
      <div style={styles.container}>
        <h1 style={styles.heading}>Website Under Maintenance</h1>
        <p style={styles.text}>We are currently performing maintenance on the website. Please check back later.</p>
        <p>Thankyou for your patience</p>
        <p>Meanwhile you can <a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noreferrer noopener" style={{color:'red'}}> watch</a> My trending videos</p>
      </div>
    </animated.div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20%',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#666',
  },
};

export default MaintainancePage;
