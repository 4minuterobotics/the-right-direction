import React, {useState} from 'react';
import house from '../../assets/alex-house.png'
import smhouse from '../../assets/alex-house-small.png'
import './housing.css';


const Housing = () => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("loaded");
    setLoaded(true);
  }

  return(
  <div className="rd__housing section__padding" id="housing">
    <div className={loaded ? "rd__housing-image blurred-img loaded" : "rd__housing-image blurred-img"} style={{backgroundImage: `url(${smhouse})`}}>
      <img src={house} alt="housing"  loading="lazy" onLoad={handleLoad}/>
    </div>
    <div className="rd__housing-content">
      <h4>View Our Partner Homes</h4>
      <h1 className="gradient__text">We offer house options <br /> for our clients.</h1>
      <p>We partner with certified home owners in safe neighborhoods to ensure responsible and secure living arrangements for our clients.</p>
      <h4>Request to Get Started</h4>
    </div>
  </div>
);
};

export default Housing;
