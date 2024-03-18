import React, { useState } from 'react';
import { Link } from 'react-scroll';

import './NavBar.css'
function NavBar() {

  const[nav,setNav]= useState(false)

const closeMenu = () => {
  setNav(false)
}

return (
   <nav className='navbar'>
      <div className='logo'><h3>(UserLogo)</h3></div>
      <ul className={nav ? 'nav-mobile':'nav-items '} >
        <li>
          <Link to="home" smooth={true} offset={50} duration={500} onClick={closeMenu} >
          Home
          </Link>
          </li>

          <li>
          <Link to="about" smooth={true} offset={50} duration={500} onClick={closeMenu} >
            About
          </Link>
          </li>

          <li>
          <Link to="project" smooth={true} offset={50} duration={500} onClick={closeMenu} >
            Project
          </Link>
          </li>

          <li>
          <Link to="contact" smooth={true} offset={50} duration={500} onClick={closeMenu} >
            Contact
          </Link>
        </li>
      </ul>
      <button className='mobile-icon' onClick={()=>setNav(!nav)}>
        {nav ? <h1>X</h1> : <h1>⇉</h1>}
      </button>
    </nav>
)
}

export default NavBar