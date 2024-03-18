import React from 'react'
import './Project.css';

function ProjectCard(props) {
  return (
    <div className='project-card'>
    <video 
      src={props.src} 
      alt='prj1' 
      className='project-video'
      autoPlay
      loop
      muted
    />

    <p className='project-des'>
        <h5>Descerpiton:</h5>
        {props.descerption}
    </p>

        <a href={props.github_link}>
            <button className='project-btn1'>GitHub Link</button>
        </a> 
  </div>
  )
}

export default ProjectCard