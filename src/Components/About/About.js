import React, { Fragment } from 'react'
import './About.css'


function About() {
  return (

  <div name="about" className="about main-section">
    <div className="main-container">
        <h2 className="heading-secondary ">
            Here you will find more information about me, what I do
        </h2>
       <div className='about-container'>
          <div className="about__main-info">
            <h3 className="heading-quaternary">
              About Me
              </h3>
            <p className="text-primary">
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi. Praesentium nobis perspiciatis eligendi quam sunt illum quae officiis ipsa.
              <br/>
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi. Praesentium nobis perspiciatis eligendi quam sunt illum quae officiis ipsa.
              <br/>
              <br/>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi. Praesentium nobis perspiciatis eligendi quam sunt illum quae officiis ipsa.
            </p>
            <h3 className="heading-quaternary">
              Education
            </h3>
              <h3>(2020-2024)</h3>
              <p className="text-primary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi. 
              </p>
                <h3>(2019-2020)</h3>
                <p className="text-primary"> 
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit non quasi, porro distinctio nesciunt exercitationem ut placeat laborum excepturi commodi.      
                </p>
        </div>
          <div className="about__skill-info">
            <h3 className="heading-skills ">My Skills </h3>
              <ul className="about__skills">
                <li className="about__skill">html</li>
                <li className="about__skill">css</li>
                <li className="about__skill">javascript</li>
                <li className="about__skill">github</li>
                <li className="about__skill">react.js</li>
                <li className="about__skill">node.js</li>
                <li className="about__skill">express.js</li>
                <li className="about__skill">mongodb</li>
              </ul>
          </div>
        </div>
    </div>
  </div>
  )
}

export default About