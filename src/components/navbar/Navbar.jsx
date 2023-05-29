import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import rightLogo from '../../assets/logo-no-bg.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="rd__navbar">
      <div className="rd__navbar-links">
        <div className="rd__navbar-links_logo">
        {/* <div> */}
          {/* <img src={logo} /> */}
          <img src={rightLogo} />
        </div>
        <div className="rd__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#features">Our Culture</a></p>
          <p><a href="#housing">Housing</a></p>
          <p><a href="#blog">Media</a></p>
        </div>
      </div>
      <div className="rd__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="rd__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="rd__navbar-menu_container scale-up-center">
          <div className="rd__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#features">Our Culture</a></p>
            <p><a href="#housing">Housing</a></p>
            <p><a href="#blog">Media</a></p>
          </div>
          <div className="rd__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
