import React, { Fragment, useState } from 'react'
import Navbar from './Navbar'
import HomeSection from './HomeSection'
import "../static/css/LanguageWrapper.css"

function LanguageWrapper() {

  const [language, setLanguage] = useState('en')

  return (
    <div className='general-container'>
      <Navbar setLang={setLanguage} lang={language}/>
      <HomeSection lang={language} />
      {/* <AboutSection lang={language}/>
      <ProjectsSection lang={language} /> */}
    </div>
  )
}

export default LanguageWrapper