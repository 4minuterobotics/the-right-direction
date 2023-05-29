import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import house from '../../assets/alex-house.png'
import './housing.css';

const Housing = () => (
  <div className="rd__housing section__padding" id="housing">
    <div className="rd__housing-image">
      <img src={house} alt="housing" />
    </div>
    <div className="rd__housing-content">
      <h4>View Our Partner Homes</h4>
      <h1 className="gradient__text">We offer house options <br /> for our clients.</h1>
      <p>We partner with certified home owners in safe neighborhoods to ensure responsible and secure living arrangements for our clients.</p>
      <h4>Request to Get Started</h4>
    </div>
  </div>
);

export default Housing;
