import React from 'react'
import '../static/css/Contact.css'
import { MdEmail } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { IoLogoGithub } from "react-icons/io";


function ContactSection({lang}) {
  return (
    <section id='contact'>
      <div className="dislocated-div-contact">
        <div className="contact-info-container">

          <div className="email-info">
            <div className="contact-icon-container" >
              <MdEmail className='contact-icon' id='email-icon'/>
            </div>
            <div className="text-contact-container">
              <span>andreprovensi@gmail.com</span>
            </div>
          </div>

          <div className="linkedin-info">
            <div className="contact-icon-container" >
              <RxLinkedinLogo className='contact-icon' id='linkedin-icon'/> 
            </div>
            <div className="text-contact-container">
              <a href="https://www.linkedin.com/in/andreprovensi/">LinkedIn</a>
            </div>
          </div>

          <div className="github-info">
            <div className="contact-icon-container" >
              <IoLogoGithub className='contact-icon' id='github-icon'/>
            </div>
            <div className="text-contact-container">
              <a href="https://github.com/andreprovensi">GitHub</a>
            </div>
          </div>

        </div>
      </div>
      <div className='effect'></div>
    </section>
  )
}

export default ContactSection