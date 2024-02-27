import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
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
  )
}

export default NotFound