import React, {useState} from 'react';
import './Navbar.css';
import myImage from '../../assets/my-pic.jpg';
import { FaHamburger } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] =useState(false);

  const toggleMenu =() =>{
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className='portfolio-logo'>
        <img src={myImage} alt='Profile' />
        <h1>Portfolio</h1>
      </div>

      <div className='hamburger' onClick={toggleMenu}>
        <FaHamburger/>
      </div>
      
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>      
    </nav>
  )
}

export default Navbar;