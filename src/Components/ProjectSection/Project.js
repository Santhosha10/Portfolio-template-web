import React from 'react'
import ProjectCard from './ProjectCard'
import'./Project.css'

function Project() {
  return (
    <div name='project' className='project-section'>
      <h3 className='heading'>Project</h3>
      <div className='project-main-container'>
        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.'
          github_link = "#"
        />

        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.'
          github_link = "#"
        />

        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.'
          github_link = "#"
        />

        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi. '
          github_link = "#"
        />
        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.'
          github_link = "#"
        />
        <ProjectCard 
          src=''
          descerption= 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.'
          github_link = "#"
        />


      </div>
    </div>
  )
}

export default Project 