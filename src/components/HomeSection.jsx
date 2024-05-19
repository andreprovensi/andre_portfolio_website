import React from 'react'
import '../static/css/Home.css'
import '../public/images/andre_profile.png'
import profilePicture from '../public/images/andre_profile.png'
import CVfile from '../public/files/CV_EN_ANDRE_PROVENSI_PE.pdf'

function HomeSection({ lang }) {
  
  const texts = {
    homeText:{
      en:"André Provensi",
      pt:"André Provensi"
    },
    aboutText:{
      en:"Data Scientist",
      pt:'Cientista de Dados'
    },
  }

  return (
    
    <section id='home'>

      <div className='dislocated-div'>
        <div className='home-text'>
          <p id='name'>{texts.homeText[lang]}</p>
          <p id='description'>{texts.aboutText[lang]}</p>
          <a href={CVfile} download='CV_andre_provensi'><button>DOWNLOAD CV</button></a>
        </div>

        <div className='personal-image'>
          <img src={profilePicture} alt="profile" />
        </div>
      </div>
      
    </section>
  )
}

export default HomeSection