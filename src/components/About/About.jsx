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
          <img src={myImage} className='my-profile-photo' alt='Shreyas Mhade'/>
          <h2>Shreyas Mhade</h2>
          <p>B.Tech IT graduate and Frontend Developer Intern with hands-on experience in React.js projects, passionate about building intuitive user interfaces and aspiring to master full-stack development.</p>
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