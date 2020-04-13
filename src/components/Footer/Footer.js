import React from 'react';
import './Footer.css';
import logo from './logo-nav-w.png';



const footer = props =>(
  <footer className="footbar">
    <p>brought to you by Curios Strategies</p>
    <a href="https://www.curiostrategies.com/" target="_blank" rel="noopener noreferrer"><img className="footbar-logo" src={logo} alt="logo" href="https://www.curiostrategies.com/" ></img></a>
  </footer>
);

export default footer;