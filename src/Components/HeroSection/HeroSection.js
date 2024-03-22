import React from 'react'
import './HeroSection.css';
import { Link } from 'react-scroll';

function HeroSection() {

  const handleDownload = () =>{
    const resumePdfUrl = process.env.PUBLIC_URL + '#';
    window.open(resumePdfUrl,'_blank');
  }

  return (
    <div name ="home" className="home-hero">
    <div className="home-hero__content">
      <div className="home-hero__info">
        <h1 className="heading-primary">
          I'm <span>(UserName)</span> ! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id alias eaque libero a culpa ad obcaecati? Sed eos, adipisci maxime, perspiciatis deleniti tempora aspernatur voluptates beatae voluptatum, fugit molestias quam.
        </h1>
        <div className='hero-btns'>
          <button className="hero-btn-1 " 
            onClick={handleDownload}
          >
            Resume
          </button>
          <button className="hero-btn-2 ">
            <Link to="contact" smooth={true} offset={50} duration={500} >
              Contact
            </Link>
          </button>
        </div>
       
      </div>
    </div>
  </div>
  )
}

export default HeroSection
