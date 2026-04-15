import React from 'react'
import './Projects.css'
import Navbar from '../Navbar/Navbar'
import PP from '../../assets/PP.png'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'

function Projects() {
  const personalProject = [
    {
      projectImage: PP,
      title: "Personal Portfolio",
      description: "This is a description",
      skills: ["HTML", "CSS", "JS", "React.Js"],
      demoLink: "",
      githubLink: "",
    },{
      projectImage: PP,
      title: "Student Management System",
      description: "This is a description",
      skills: ["HTML", "CSS", "JS", "React.Js"],
      demoLink: "",
      githubLink: "",
    }
  ];
  return (
    <div className='project'>
      <Navbar />
      <div className='project-section'>
        <h1 className='section-title'>Personal Projects</h1>
        <div className='project-grid'>
        {personalProject.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.projectImage} className="project-image" alt="Personal Project" />
            <div className="project-body">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="skills-list">
                {project.skills.map((skill, ind) => (
                  <span key={ind} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className='key-buttons'>
              <button><FaLaptopCode />Demo</button>
              <button><FaGithub/> Git Repo</button>
            </div>
          </div>
        ))}
        
        </div>
      </div>
    </div>
  )
}

export default Projects
