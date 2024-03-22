import React from 'react'
import './footer.css'
import {Link} from 'react-scroll';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='route-content'>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="home" smooth={true} offset={50} duration={500} >
                Home
              </Link>
             </li>

            <li>
              <Link to="about" smooth={true} offset={50} duration={500} >
                About
              </Link>
            </li>

             <li>
                <Link to="project" smooth={true} offset={50} duration={500} >
                  Project
                </Link>
              </li>

              <li>
                <Link to="contact" smooth={true} offset={50} duration={500} >
                  Contact
                </Link>
              </li>
          </ul>
        </div>
        <div className='footer-content'>
          <a href='#'>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam culpa harum ipsam, vero modi voluptatibus rerum quidem aliquam voluptatum .</h3>
          </a>
          
          <h5> copyright@ (UserName) {new Date().getFullYear()}</h5> 
        </div>
          <footer className='footer-social'>                   
            <div className='social-acc'>
             <ul>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                <li>GitHub/li>
                <li>Discord</li>
                <li>FaceBook</li>
              </ul>

            </div>
          </footer> 
      </div>
    </div>
  )
}

export default Footer
