import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, Blog, Housing, Culture, WhatWeDo, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    {/* <Brand /> */}
    <WhatWeDo />
    <Culture />
    <Housing />
    <CTA />
    <Blog />
    <Footer />
  </div>
);

export default App;

