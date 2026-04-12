import React from 'react'
import './Projects.css'
import Navbar from '../Navbar/Navbar'
import PP from '../../assets/background-pic1.png'

function Projects() {
    const personalProjects=[
        {
            image:{PP},
            name:"Personal Portfolio",
            discription:"This is my personal portfolio website",
            skills:["React.js","HTML","CSS"],
            demo:"",
            git:"https://github.com/shreyasmhade/Personal-Portfolio"
        },
        {
            image:{PP},
            name:"Personal Portfolio",
            discription:"This is my personal portfolio website",
            skills:["React.js","HTML","CSS"],
            demo:"",
            git:"https://github.com/shreyasmhade/Personal-Portfolio"
        }
    ]
  return (
    <div>
      <Navbar/>
      <div className='project-section'>
        <h1>Personal Projects</h1>
      <div className='personal-projects'>
        {personalProjects.map((project,index)=>(
            <div key={index} className='project-card'>
                {project.name}
            </div>
        ))}

      </div>
      <div className='assignment-projects'>
        <h1>Assignment Projects</h1>
      </div>
      </div>
    </div>
  )
}

export default Projects
