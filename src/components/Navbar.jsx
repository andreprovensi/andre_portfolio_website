import React from 'react'
import '../static/css/Navbar.css'
import NavLink from './NavLink'
import githubIcon from '../public/github.svg'
import linkedinIcon from '../public/linkedin.svg'

function Navbar({setLang, lang}) {
  
  const texts = {
    homeText:{
      en:'HOME',
      pt:'HOME'
    },
    aboutText:{
      en:'ABOUT',
      pt:'SOBRE MIM'
    },
    projectsText:{
      en:'PROJECTS',
      pt:'PROJETOS'
    },
    contactText:{
      en:'CONTACTS',
      pt:'CONTATOS'
    },
    skillsText:{
      en:'SKILLS',
      pt:'SKILLS'
    },

  }
  return (
    <nav className='navbar'>
      <div id='links'>
        <NavLink href='#home' title={texts.homeText[lang]}/>
        <NavLink href='#about' title={texts.aboutText[lang]}/>
        <NavLink href='#skills' title={texts.skillsText[lang]}/>
        <NavLink href='#projects' title={texts.projectsText[lang]}/>
      </div>

      <div id='medias'>
        <a href="https://www.linkedin.com/in/andreprovensi/" target='blank_' className='media-link'>
          <img src={linkedinIcon} alt="linkedin icon" />
        </a>

        <a href="https://github.com/andreprovensi" target='blank_' className='media-link'>
          <img src={githubIcon} alt="github icon" />
        </a>

        <div id='set-language' className='media-link'>
          <span onClick={e=>setLang('en')}>EN</span>|<span onClick={e=>setLang('pt')}>PT</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar