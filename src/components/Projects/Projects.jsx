import React from 'react'
import './projects.css'
import Navbar from '../Navbar/Navbar'

function Projects() {
  const personalProject=[
    {projectImage:{},
     title:"Personal Portfolio",
     discription:"",
     skills:["",""],
     demoLink:"",
     githubLink:""
     
  },
  ]
  return (
    <div className='project'>
      <Navbar />
      <div className='project-section'>
        <h1>Personal Projects</h1>
        {personalProject.map((project,index)=>(
          <div key={index} className='project-card'>
            {project.name}
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Projects
