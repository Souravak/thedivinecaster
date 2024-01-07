import React from 'react'

const Verified = () => {
  return (
    <span className="fa fa-stack fa-lg" style={{fontSize: '0.4em', verticalAlign:'center'}}>
        <i className="fa fa-certificate fa-stack-2x" style={{ color: 'blue'}} ></i>
        <i className="fa fa-check fa-stack-1x fa-inverse"></i>
    </span>
  )
}

export default Verified