import React from 'react';
import gpt3Logo from '../../logo.svg';
import rightLogo from '../../assets/logo-no-bg.png';
import './footer.css';

const Footer = () => (
  <div className="rd__footer section__padding">
    <div className="rd__footer-heading">
      <h1 className="gradient__text">Do you want to head your life in the Right Direction?</h1>
    </div>

    <div className="rd__footer-btn">
      <p>Request Access</p>
    </div>

    <div className="rd__footer-links">
      <div className="rd__footer-links_logo">
        <img src={rightLogo} alt="rd_logo" />
        {/* <p>THE RIGHT DIRECTION, <br /> All Rights Reserved</p> */}
      </div>
      <div className="rd__footer-links_div">
        <h4>Social Media</h4>
        <p>LinkedIn</p>
        <p>Instagram</p>
        <p>Facebook</p>
      </div>
      <div className="rd__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>
      <div className="rd__footer-links_div">
        <h4>Get in touch</h4>
        <p>1839 s Alma School Rd, Mesa, AZ, 85210</p>
        <p>708-928-3580</p>
        <p>info@therightdirectionwellness.com</p>
      </div>
    </div>

    <div className="rd__footer-copyright">
      <p>@2023 THE RIGHT DIRECTION. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
