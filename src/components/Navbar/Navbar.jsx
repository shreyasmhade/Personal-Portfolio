import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/"><div className='portfolio-logo'>
        
        <img src={myImage} className="profile-image" alt='Profile' />
        <h1>Portfolio</h1>
              
      </div></Link>  

      <div className='hamburger' onClick={toggleMenu}>
        <FaHamburger/>
      </div>
      
      <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>      
    </nav>
  )
}

export default Navbar;