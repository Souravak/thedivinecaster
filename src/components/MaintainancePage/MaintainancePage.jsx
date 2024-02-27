import React from 'react';
import { useSpring, animated } from 'react-spring';
import NotFound from '../NotFound/NotFound';
import './MaintainancePage.css';

const MaintainancePage = ({code}) => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      {code === 'offline' && (
        <animated.div style={fadeIn}>
          <div style={styles.container}>
            <h1 style={styles.heading}>Website Under Maintenance</h1>
            <p style={styles.text}>We are currently performing maintenance on the website. Please check back later.</p>
            <p>Thank you for your patience</p>
            <p>Meanwhile you can <a href="https://www.youtube.com/thedivinecaster" target="_blank" rel="noreferrer noopener" style={{color:'red'}}>watch</a> My trending videos</p>
          </div>
        </animated.div>
      )}
  
      {code === '404' && (
        <NotFound />
      )}
    </>
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
