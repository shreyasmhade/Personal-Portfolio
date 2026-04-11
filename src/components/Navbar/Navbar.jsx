import React from 'react';
import './Navbar.css';
import myImage from '../../assets/my-pic.jpg';

function Navbar() {
  return (
    <nav>
      <div className='portfolio-logo'>
        <img src={myImage} alt='Profile' />
        <h1>Portfolio</h1>
      </div>
      
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>      
    </nav>
  )
}

export default Navbar;