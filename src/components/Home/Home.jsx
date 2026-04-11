import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { FaDownload } from 'react-icons/fa'; './react-icons/fa'

function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero-content'>
        <h1>Shreyas Mhade</h1>
        <p>Full Stack Developer and B.Tech IT graduate with First Class distinction, passionate about building scalable web applications.</p>
        <div>
            <button className='download-resume'><FaDownload/> Download Resume</button>
        </div>
      </div>
    </div>
  )
}

export default Home;