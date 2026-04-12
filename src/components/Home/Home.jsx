import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import MyResume from '../../assets/CV.pdf'
import { FaCss3, FaDownload, FaHtml5, FaJava, FaJs, FaReact } from 'react-icons/fa'; './react-icons/fa'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero-section'>
      <div className='hero-content'>
        <h1>Shreyas Mhade</h1>
        <p>Full Stack Developer and B.Tech IT graduate with First Class distinction, passionate about building scalable web applications.</p>
        <div>
            <a href={MyResume} download="My_Resume.pdf"><button className='download-resume'><FaDownload size={20}/> Download Resume</button></a>
        </div>
      </div>
      <div className='skill-content'>
        <FaHtml5 />
        <FaCss3 />
        <FaJs />
        <FaReact/>
        <FaJava/>
      </div>
      </div>
    </div>
  )
}

export default Home;