import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div name='contact' className='contact'>
      <h3>Contact Me</h3>
      <div className='contact-container'>
        <form className='contact-form'>
          <input className='contact-name' type='text' placeholder='Enter your name..'/>
          <input className='contact-email' type='email'placeholder='Enter your Email address'/>
          <textarea className='contact-textarea' typeof='message' placeholder='Enter Your Message'/>
          <button type='submit' className='btn'>Submit</button>
        </form>
        {/* Add Email service here to Get message form the pepole  */}
      </div>
    </div>
  )
}

export default Contact