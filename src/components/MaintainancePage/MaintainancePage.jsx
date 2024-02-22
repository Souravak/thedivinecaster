import React from 'react';
import { useSpring, animated } from 'react-spring';
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
        <section className="page_404">
          <div className="error_container container">
            <div className="row">	
              <div className="">
                <div className="text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center">404</h1>
                  </div>
                  <div className="contant_box_404">
                    <h3 className="h2">Looks like you're lost</h3>
                    <p>The page you are looking for is not available!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
