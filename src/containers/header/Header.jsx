import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import druggie from '../../assets/right-alex.png';
import './header.css';

const Header = () => (
  <div className="rd__header section__padding" id="home">
    <div className="rd__header-content">
      <h1 className="gradient__text">Find Your Way: Regain Control of Your Future</h1>
      <p>Through passion and integrity, here at Right Direction Wellness LLC will provide quality care for our clients leaving them with clarity and tranquility for future endeavors.</p>

      <div className="rd__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      {/* <div className="rd__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    <div className="rd__header-image">
      {/* <img src={ai} /> */}
      <img src={druggie} />
    </div>
  </div>
);

export default Header;
