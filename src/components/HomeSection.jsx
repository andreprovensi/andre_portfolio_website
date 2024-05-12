import React from 'react'
import '../static/css/Home.css'
import '../public/images/andre_profile.png'
import profilePicture from '../public/images/andre_profile.png'

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
          <button>DOWNLOAD CV</button>
        </div>

        <div className='personal-image'>
          <img src={profilePicture} alt="profile" />
        </div>
      </div>
      
    </section>
  )
}

export default HomeSection