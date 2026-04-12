import React from 'react'
import './About.css'
import Navbar from '../Navbar/Navbar';
import myImage from '../../assets/FormalPhoto.png';
import { FaCode } from 'react-icons/fa';

function About() {
  return (
    <div className='about'>
      <Navbar/>
      <div className='about-section'>
        <div className='about-profile'>
          <img src={myImage} className='my-profile-photo' alt='my-photo'/>
          <p>I am a B.Tech IT graduate, currently working as a Frontend Developer Intern, with experience contributing to React.js projects and aspiring to become a successful Full Stack Developer.</p>
        </div>
        <div className='about-content'>
          <div className='content-top'>
            <span className='red-dot'></span>
            <span className='yellow-dot'></span>
            <span className='green-dot'></span>
            <p className='file-name'><FaCode/> About.jsx</p>
          </div>
          <div className='content-details'>
            <pre>
              {`   
    const user={
      name:"Shreyas Mhade",
      location:"Mumbai, India"
      experience:"6 months intenship"
      passion:"Building amazing UI"

      skills: {
        frontend:["Html", "Css", "JavaScript", "React.Js", "Tailwind" ,"Bootstrap"],
        backend:["Node.Js","Python"],
        database:["SQL","MySQL","MongoDB"],
      },
      currentFocus: "Full-stack development",
    };`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
